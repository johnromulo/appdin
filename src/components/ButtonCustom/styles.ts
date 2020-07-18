import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { size } from '@styles/responsive';

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
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${size(4)}px;
`;

export const Content = styled(RectButton)`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${size(4)}px;
  padding: ${size(14)}px ${size(10)}px;
`;

export const Text = styled.Text`
  font-size: ${size(16)}px;
  font-weight: bold;
  color: ${props => props.theme.colors.textPrimary};
`;
