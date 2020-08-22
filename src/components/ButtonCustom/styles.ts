import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View.attrs(props => ({
  ...props.theme.shadows.type1,
}))`
  background-color: ${props => props.theme.colors.primary.type1};
  border-radius: ${props => props.theme.border.radius.medium};
`;

export const Content = styled(RectButton)`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary.type1};
  border-radius: ${props => props.theme.border.radius.medium};
  padding: ${props =>
    `${props.theme.spacings.sp4}px ${props.theme.spacings.sp3}px`};
`;

export const Text = styled.Text`
  font-size: ${props => props.theme.fontsSizes.md}px;
  font-weight: bold;
  color: ${props => props.theme.colors.natural.type1};
`;

export const Loading = styled.ActivityIndicator.attrs(props => ({
  size: 'small',
  color: props.theme.colors.natural.type1,
}))``;
