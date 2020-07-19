import React, { useState, useRef, useCallback } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/native';

import { translate } from '@locales/translate';

import { useAuth } from '@hooks/auth';
import { alert } from '@hooks/useAlert';

import api from '@services/api';

import { IAnimatedLottieView } from '@interfaces/IAnimatedLottieView';

import InputForm from '@components/InputForm';
import ButtonCustom from '@components/ButtonCustom';
import ButtonClearCustom from '@components/ButtonClearCustom';
import ButtonIconCustom from '@components/ButtonIconCustom';

import {
  Wrap,
  HeaderButtonContainer,
  Container,
  Scroll,
  Main,
  Header,
  LottieContent,
  SendMailAnimation,
  Content,
  IconArrowLeft,
  MakeSendCodeContainer,
  MakeSendCodeText,
  InfoSendCodeText,
  InfoSendCodeTextExemple,
  InputContent,
  IconAccountKey,
  SignContent,
  TextInfoSignUp,
} from './styles';

import formValidatorLogin from './formValidator';

const EmailActivation: React.FC = () => {
  const { goBack } = useNavigation();

  const { emailInactive } = useAuth();

  const [loading, setLoading] = useState(false);
  const [loadingResend, setLoadingResend] = useState(false);

  const lottieRef = useRef<IAnimatedLottieView | any>(null);

  const scrollRef = useRef<any>(null);

  const {
    setFieldTouched,
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      code: '',
    },
    validationSchema: formValidatorLogin,
    onSubmit: async resultValues => {
      try {
        setLoading(true);

        await api.get(`activateEmail/${emailInactive}/${resultValues.code}`);

        setLoading(false);

        alert({
          typeAlert: 'success',
          title: translate('success'),
          message: translate('actvatedMailSuccess'),
          buttons: [
            {
              text: 'ok',
              onPress: () => {
                goBack();
              },
              styleButton: 'success',
            },
          ],
        });
      } catch (error) {
        setLoading(false);
        if (error?.response?.status && error?.response?.data) {
          const { data } = error.response;
          const message = data.error;
          alert({
            typeAlert: 'error',
            title: translate('attention'),
            message,
            buttons: [
              {
                text: 'ok',
                styleButton: 'error',
              },
            ],
          });
        } else {
          alert({
            typeAlert: 'error',
            title: translate('attention'),
            message: translate('connectServerErro'),
            buttons: [
              {
                text: 'ok',
                styleButton: 'error',
              },
            ],
          });
        }
      }
    },
  });

  const resend = useCallback(async () => {
    try {
      setLoadingResend(true);
      await api.post('resendCodeActivateEmail/', {
        email: emailInactive,
      });

      setLoadingResend(false);
      lottieRef.current.play();

      setTimeout(() => {
        lottieRef.current.reset();
      }, 2400);
    } catch (error) {
      setLoadingResend(false);
    }
  }, [emailInactive]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrap>
        <Container>
          <Scroll ref={scrollRef}>
            <Header>
              <HeaderButtonContainer>
                <ButtonIconCustom
                  icon={() => <IconArrowLeft />}
                  onPress={goBack}
                />
              </HeaderButtonContainer>
            </Header>
            <LottieContent>
              <SendMailAnimation ref={lottieRef} />
            </LottieContent>
            <Main>
              <MakeSendCodeContainer>
                <MakeSendCodeText>
                  {translate('submityourCode')}
                </MakeSendCodeText>
                <InfoSendCodeText>{translate('infoCode')}</InfoSendCodeText>
                <InfoSendCodeTextExemple>ex: 123456.</InfoSendCodeTextExemple>
              </MakeSendCodeContainer>
              <InputContent>
                <InputForm
                  icon={() => <IconAccountKey />}
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  placeholder={translate('code')}
                  value={values.code}
                  error={!!(errors.code && touched.code)}
                  mensageError={errors.code}
                  onChangeText={handleChange('code')}
                  onBlur={() => setFieldTouched('code')}
                  maxLength={6}
                  onFocus={() => {
                    setTimeout(() => {
                      scrollRef.current.scrollToEnd({
                        animated: true,
                      });
                    }, 600);
                  }}
                />
              </InputContent>
              <Content>
                <ButtonCustom
                  loading={loading}
                  text={translate('sendCode')}
                  onPress={handleSubmit}
                />
              </Content>
              <SignContent>
                <TextInfoSignUp>{translate('questionCode')}</TextInfoSignUp>
                <ButtonClearCustom
                  loading={loadingResend}
                  onPress={resend}
                  text={translate('resend')}
                />
              </SignContent>
            </Main>
          </Scroll>
        </Container>
      </Wrap>
    </TouchableWithoutFeedback>
  );
};

export default EmailActivation;
