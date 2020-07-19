import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '@hooks/auth';

import { translate } from '@locales/translate';

import InputForm from '@components/InputForm';
import ButtonCustom from '@components/ButtonCustom';
import ButtonClearCustom from '@components/ButtonClearCustom';

import {
  Container,
  Content,
  MakeSignInContainer,
  MakeSignInText,
  IconMailOutline,
  IconLockOutline,
  SignContent,
  TextInfoSignUp,
} from './styles';

import formValidatorLogin from './formValidator';

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();
  const { loading, singnIn } = useAuth();

  const {
    // setFieldValue,
    setFieldTouched,
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      email: 'gixifo1459@gomail4.com',
      password: 'Teste123',
    },
    validationSchema: formValidatorLogin,
    onSubmit: resultValues => {
      singnIn(resultValues.email, resultValues.password);
    },
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <MakeSignInContainer>
          <MakeSignInText>{translate('makeLogin')}</MakeSignInText>
        </MakeSignInContainer>
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
          <ButtonCustom
            loading={loading}
            text={translate('signIn')}
            onPress={handleSubmit}
          />
        </Content>

        <ButtonClearCustom text={translate('forgotPassword')} />

        <SignContent>
          <TextInfoSignUp>{translate('questionSignUp')}</TextInfoSignUp>
          <ButtonClearCustom
            text={translate('signUp')}
            onPress={() => navigate('Main', { screen: 'SignUp' })}
          />
        </SignContent>
        {/* <Button onPress={teste} title="TESTE" />
      <Button onPress={testeRefreshtoken} title="testeRefreshtoken" />
      <Button
        onPress={() => navigate('Utils', { screen: 'Alert' })}
        title="Open Alert"
      />

      <Button
        onPress={() => navigate('Main', { screen: 'SignUp' })}
        title="SignUp"
      /> */}
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
