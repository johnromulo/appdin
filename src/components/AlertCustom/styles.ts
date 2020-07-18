import styled from 'styled-components/native';
import { size } from '@styles/responsive';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: ${size(300)}px;
  padding: ${size(12)}px;
  border-radius: ${10}px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.backgoundSecondary};
`;

export const Header = styled.View``;

export const Title = styled.Text`
  font-size: ${size(22)}px;
  color: ${props => props.theme.colors.textPrimary};
  font-weight: bold;
`;

export const Main = styled.View`
  padding: ${size(12)}px;
`;

export const Message = styled.Text`
  font-size: ${size(14)}px;
  color: ${props => props.theme.colors.textPrimary};
`;

export const Button = styled.TouchableOpacity`
  padding: ${size(8)}px ${size(20)}px;
  border-radius: ${4}px;
  /* background-color: ${props => props.theme.colors.info}; */
`;

export const TextButton = styled.Text`
  font-size: ${size(16)}px;
  color: ${props => props.theme.colors.textPrimary};
`;
