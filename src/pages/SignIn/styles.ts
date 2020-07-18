import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { size } from '@styles/responsive.ts';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.backgoundPrimary};
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: 100%;
  padding: ${size(10)}px ${size(30)}px;
`;

export const SignContent = styled.View`
  flex-direction: row;
  width: 100%;
  padding: ${size(10)}px ${size(22)}px;
  align-items: center;
  justify-content: center;
`;

export const TextInfoSignUp = styled.Text`
  font-size: ${size(14)};
  color: ${props => props.theme.colors.textSecundary};
`;

export const IconMailOutline = styled(Icon).attrs(props => ({
  color: props.theme.colors.textSecundary,
  size: size(18),
  name: 'mail-outline',
}))``;

export const IconLockOutline = styled(Icon).attrs(props => ({
  color: props.theme.colors.textSecundary,
  size: size(18),
  name: 'vpn-key',
}))``;
