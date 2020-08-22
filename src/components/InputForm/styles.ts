import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { size } from '@styles/responsive';

export const Wrap = styled.View``;

export const Container = styled.View.attrs(props => ({
  ...props.theme.shadows.type1,
}))`
  background-color: ${props => props.theme.colors.secondary.type1};
  padding: 0 ${props => props.theme.spacings.sp3}px;
  width: 100%;
  height: ${size(48)}px;
  flex-direction: row;
  align-items: center;
  border-radius: ${props => props.theme.border.radius.medium};
`;

export const IconContainer = styled.View`
  margin-right: ${props => props.theme.spacings.sp3}px;
`;

export const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.colors.natural.type2,
}))`
  flex: 1;
  font-size: ${props => props.theme.fontsSizes.md}px;
  color: ${props => props.theme.colors.natural.type1};
`;

export const ButtonVibility = styled.TouchableOpacity`
  padding: ${props =>
    `${props.theme.spacings.sp1}px ${props.theme.spacings.sp2}px`};
`;

export const IconVisibility = styled(Icon).attrs(props => ({
  color: props.theme.colors.natural.type1,
  size: props.theme.fontsSizes.xl,
  name: 'visibility',
}))``;

export const IconVisibilityOff = styled(Icon).attrs(props => ({
  color: props.theme.colors.natural.type1,
  size: props.theme.fontsSizes.xl,
  name: 'visibility-off',
}))``;

export const ContainerError = styled.View`
  padding-top: ${props => props.theme.spacings.sp2}px;
`;

export const TextError = styled.Text`
  color: ${props => props.theme.colors.suport.type4};
  font-size: ${props => props.theme.fontsSizes.xs}px;
`;
