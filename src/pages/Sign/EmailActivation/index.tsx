import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/native';

import { translate } from '@locales/translate';

import { useAuth } from '@hooks/auth';
import { alert } from '@hooks/useAlert';

import api from '@services/api';

import InputForm from '@components/InputForm';
import ButtonCustom from '@components/ButtonCustom';
import ButtonClearCustom from '@components/ButtonClearCustom';
import ButtonIconCustom from '@components/ButtonIconCustom';

import {
  Wrap,
  HeaderButtonContainer,
  Container,
  Header,
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
        goBack();
      } catch (error) {
        setLoading(false);
        if (error?.response?.status && error?.response?.data) {
          const { data } = error.response;
          const message = data.error;
          alert({
            title: 'Atenção!',
            message,
          });
        } else {
          alert({
            title: 'Atenção!',
            message:
              'Erro ao conectar ao servidor, tente novamente mais tarde!',
          });
        }
      }
    },
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrap>
        <Header>
          <HeaderButtonContainer>
            <ButtonIconCustom icon={() => <IconArrowLeft />} onPress={goBack} />
          </HeaderButtonContainer>
        </Header>
        <Container>
          <MakeSendCodeContainer>
            <MakeSendCodeText>{translate('submityourCode')}</MakeSendCodeText>
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
            <ButtonClearCustom text={translate('resend')} />
          </SignContent>
        </Container>
      </Wrap>
    </TouchableWithoutFeedback>
  );
};

export default EmailActivation;
