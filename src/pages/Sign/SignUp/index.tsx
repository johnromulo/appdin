import React, { useState, useRef } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/native';

import { translate } from '@locales/translate';

import { useAuth } from '@hooks/auth';
import { alert } from '@hooks/useAlert';

import api from '@services/api';

import InputForm from '@components/InputForm';
import ButtonCustom from '@components/ButtonCustom';
import ButtonIconCustom from '@components/ButtonIconCustom';
import CheckBoxForm from '@components/CheckboxForm';

import {
  Wrap,
  HeaderButtonContainer,
  Container,
  Scroll,
  MakeSignUpContainer,
  MakeSignUpText,
  Main,
  Header,
  Content,
  IconArrowLeft,
  IconAccountOutline,
  IconMailOutline,
  IconLockOutline,
  TextCheckBox,
} from './styles';

import formValidatorRegister from './formValidator';

const EmailActivation: React.FC = () => {
  const { goBack } = useNavigation();

  const { emailInactive } = useAuth();

  const [loading, setLoading] = useState(false);

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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      terms: false,
    },
    validationSchema: formValidatorRegister,
    onSubmit: async resultValues => {
      try {
        setLoading(true);

        await api.post(`users/commom`, {
          ...resultValues,
          authType: 'PASS',
          accepTerms: true,
        });

        setLoading(false);

        alert({
          typeAlert: 'info',
          title: translate('success'),
          message: translate('actvatedMailSuccess'),
          buttons: [
            {
              text: 'ok',
              onPress: () => {
                // goBack();
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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrap>
        <Container>
          <Header>
            <HeaderButtonContainer>
              <ButtonIconCustom
                icon={() => <IconArrowLeft />}
                onPress={goBack}
              />
            </HeaderButtonContainer>
          </Header>
          <Scroll ref={scrollRef}>
            <Main>
              <MakeSignUpContainer>
                <MakeSignUpText>{translate('makeSignUp')}</MakeSignUpText>
              </MakeSignUpContainer>
              <Content>
                <InputForm
                  icon={() => <IconAccountOutline />}
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  placeholder={translate('globalFirstName')}
                  value={values.firstName}
                  error={!!(errors.firstName && touched.firstName)}
                  mensageError={errors.firstName}
                  onChangeText={handleChange('firstName')}
                  onBlur={() => setFieldTouched('firstName')}
                  maxLength={6}
                  onFocus={() => {
                    setTimeout(() => {
                      scrollRef.current.scrollToEnd({
                        animated: true,
                      });
                    }, 600);
                  }}
                />
              </Content>
              <Content>
                <InputForm
                  icon={() => <IconAccountOutline />}
                  autoCapitalize="none"
                  placeholder={translate('globalLastName')}
                  value={values.lastName}
                  error={!!(errors.lastName && touched.lastName)}
                  mensageError={errors.lastName}
                  onChangeText={handleChange('lastName')}
                  onBlur={() => setFieldTouched('lastName')}
                />
              </Content>
              <Content>
                <InputForm
                  icon={() => <IconMailOutline />}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  placeholder={translate('globalEmail')}
                  value={values.email}
                  error={!!(errors.email && touched.email)}
                  mensageError={errors.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
              </Content>
              <Content>
                <InputForm
                  icon={() => <IconLockOutline />}
                  autoCapitalize="none"
                  secureTextEntry
                  placeholder={translate('globalPassword')}
                  value={values.password}
                  error={!!(errors.password && touched.password)}
                  mensageError={errors.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                />
              </Content>
              <Content>
                <CheckBoxForm textError={errors.terms}>
                  <TextCheckBox>texto</TextCheckBox>
                </CheckBoxForm>
              </Content>
              <Content>
                <ButtonCustom
                  loading={loading}
                  text={translate('signUp')}
                  onPress={handleSubmit}
                />
              </Content>
            </Main>
          </Scroll>
        </Container>
      </Wrap>
    </TouchableWithoutFeedback>
  );
};

export default EmailActivation;
