import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: transparent;
  border-radius: ${props => props.theme.border.radius.medium};
`;

export const Content = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: ${props => props.theme.border.radius.medium};
  padding: ${props =>
    `${props.theme.spacings.sp4}px ${props.theme.spacings.sp3}px`};
`;

export const Text = styled.Text`
  font-size: ${props => props.theme.fontsSizes.sm}px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary.type1};
`;

export const Loading = styled.ActivityIndicator.attrs(props => ({
  size: 'small',
  color: props.theme.colors.primary.type1,
}))``;
