import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  background-color: ${props => props.theme.colors.secondary.type2};
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: 100%;
  padding: ${props =>
    `${props.theme.spacings.sp3}px ${props.theme.spacings.sp8}px`};
`;

export const MakeSignInContainer = styled.View``;

export const MakeSignInText = styled.Text`
  font-size: ${props => props.theme.fontsSizes['2xl']}px;
  color: ${props => props.theme.colors.natural.type1};
  margin: ${props => props.theme.spacings.sp8}px 0;
`;

export const SignContent = styled.View`
  flex-direction: row;
  width: 100%;
  padding: ${props =>
    `${props.theme.spacings.sp3}px ${props.theme.spacings.sp5}px`};
  align-items: center;
  justify-content: center;
`;

export const TextInfoSignUp = styled.Text`
  font-size: ${props => props.theme.fontsSizes.sm}px;
  color: ${props => props.theme.colors.natural.type2};
`;

export const IconMailOutline = styled(Icon).attrs(props => ({
  color: props.theme.colors.natural.type2,
  size: props.theme.fontsSizes.sm,
  name: 'email-outline',
}))``;

export const IconLockOutline = styled(Icon).attrs(props => ({
  color: props.theme.colors.natural.type2,
  size: props.theme.fontsSizes.sm,
  name: 'key-outline',
}))``;
