import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { size } from '@styles/responsive';

export const Wrap = styled.View``;

export const Container = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: size(2),
  },
  shadowOpacity: 0.25,
  shadowRadius: size(3.84),
  elevation: 5,
})`
  background-color: ${props => props.theme.colors.backgoundSecondary};
  padding: 0 ${size(10)}px;
  width: 100%;
  height: ${size(48)}px;
  flex-direction: row;
  align-items: center;
  border-radius: ${size(4)}px;
`;

export const IconContainer = styled.View`
  margin-right: ${size(10)}px;
`;

export const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.colors.textSecundary,
}))`
  flex: 1;
  font-size: ${size(16)}px;
  color: ${props => props.theme.colors.textPrimary};
`;

export const ButtonVibility = styled.TouchableOpacity`
  padding: ${size(4)}px ${size(8)}px;
`;

export const IconVisibility = styled(Icon).attrs(props => ({
  color: props.theme.colors.textPrimary,
  size: size(20),
  name: 'visibility',
}))``;

export const IconVisibilityOff = styled(Icon).attrs(props => ({
  color: props.theme.colors.textPrimary,
  size: size(20),
  name: 'visibility-off',
}))``;

export const ContainerError = styled.View`
  padding-top: ${size(8)}px;
`;

export const TextError = styled.Text`
  color: ${props => props.theme.colors.danger};
  font-size: ${size(12)}px;
`;
