import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Platform } from 'react-native';

import { size } from '@styles/responsive.ts';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  background-color: ${props => props.theme.colors.backgoundPrimary};
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: 100%;
  padding: ${size(10)}px ${size(30)}px;
`;

export const MakeSignInContainer = styled.View``;

export const MakeSignInText = styled.Text`
  font-size: ${size(24)}px;
  color: ${props => props.theme.colors.textPrimary};
  margin: ${size(28)}px 0;
`;

export const SignContent = styled.View`
  flex-direction: row;
  width: 100%;
  padding: ${size(10)}px ${size(22)}px;
  align-items: center;
  justify-content: center;
`;

export const TextInfoSignUp = styled.Text`
  font-size: ${size(14)}px;
  color: ${props => props.theme.colors.textSecundary};
`;

export const IconMailOutline = styled(Icon).attrs(props => ({
  color: props.theme.colors.textSecundary,
  size: size(18),
  name: 'email-outline',
}))``;

export const IconLockOutline = styled(Icon).attrs(props => ({
  color: props.theme.colors.textSecundary,
  size: size(18),
  name: 'key-outline',
}))``;
