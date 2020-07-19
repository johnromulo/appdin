import styled from 'styled-components/native';
import { size } from '@styles/responsive';

export const Container = styled.View`
  background-color: transparent;
  border-radius: ${size(4)}px;
`;

export const Content = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: ${size(4)}px;
  padding: ${size(12)}px ${size(10)}px;
`;

export const Text = styled.Text`
  font-size: ${size(14)}px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;
