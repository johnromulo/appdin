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
})``;

export const Content = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${size(44 / 2)}px;
  padding: ${size(8)}px;
  width: ${size(44)}px;
  height: ${size(44)}px;
`;
