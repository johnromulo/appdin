import styled from 'styled-components/native';
import RNCheckBox from '@react-native-community/checkbox';

import { size } from '@styles/responsive';

export const Wrap = styled.View`
  padding: 0 ${props => props.theme.spacings.sp1}px;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheboxContent = styled.View``;

export const CheckBox = styled(RNCheckBox).attrs(props => ({
  onCheckColor: props.theme.colors.primary.type1,
  onTintColor: props.theme.colors.natural.type1,
  tintColors: {
    true: props.theme.colors.primary.type1,
    false: props.theme.colors.primary.type1,
  },
  boxType: 'square',
}))`
  width: ${size(20)}px;
  height: ${size(20)}px;
`;

export const ContentText = styled.View`
  margin-left: ${props => props.theme.spacings.sp2}px;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: ${props => props.theme.spacings.sp1}px;
`;

export const ContainerError = styled.View`
  padding-top: ${props => props.theme.spacings.sp2}px;
`;

export const Prefix = styled.Text`
  font-size: ${props => props.theme.fontsSizes.sm}px;
  color: ${props => props.theme.colors.natural.type1};
`;

export const TextContentClick = styled.TouchableOpacity``;

export const Text = styled.Text`
  font-size: ${props => props.theme.fontsSizes.md}px;
  color: ${props => props.theme.colors.primary.type1};
  text-decoration-line: underline;
`;

export const Sufix = styled.Text`
  font-size: ${props => props.theme.fontsSizes.sm}px;
  color: ${props => props.theme.colors.natural.type1};
`;
export const TextError = styled.Text`
  color: ${props => props.theme.colors.suport.type4};
  font-size: ${props => props.theme.fontsSizes.xs}px;
`;
