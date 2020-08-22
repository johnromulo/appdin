import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { size } from '@styles/responsive';

export const Container = styled.View.attrs(props => ({
  ...props.theme.shadows.type1,
}))``;

export const Content = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary.type1};
  border-radius: ${props => props.theme.border.radius.circle(44)}px;
  padding: ${props => props.theme.spacings.sp2}px;
  width: ${size(44)}px;
  height: ${size(44)}px;
`;
