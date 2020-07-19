import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { size } from '@styles/responsive';
import { Animated } from 'react-native';
import LottieView from 'lottie-react-native';

import successfulLottie from '@assets/lottie/successful.json';
import failedLottie from '@assets/lottie/failed.json';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  width: ${size(300)}px;
  padding: ${size(12)}px;
  border-radius: ${10}px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.backgoundSecondary};
`;

export const ContentAnimated = Animated.createAnimatedComponent(Content);

export const Header = styled.View``;

export const Title = styled.Text`
  font-size: ${size(20)}px;
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

interface ButtonProps {
  typeAlert: 'success' | 'error' | 'info';
}

export const Button = styled(RectButton)<ButtonProps>`
  margin: ${size(6)}px;
  padding: ${size(10)}px ${size(32)}px;
  border-radius: ${4}px;
  background-color: ${props =>
    (props.typeAlert === 'success' && props.theme.colors.positive) ||
    (props.typeAlert === 'error' && props.theme.colors.danger) ||
    (props.typeAlert === 'info' && props.theme.colors.info)};
`;

export const TextButton = styled.Text`
  font-size: ${size(14)}px;
  font-weight: bold;
  color: ${props => props.theme.colors.textPrimary};
`;

export const LottieContent = styled.View``;

export const SuccessAnimation = styled(LottieView).attrs({
  source: successfulLottie,
  loop: false,
})`
  width: ${size(250)}px;
  height: ${size(250)}px;
`;

export const ErrorAnimation = styled(LottieView).attrs({
  source: failedLottie,
  loop: false,
})`
  width: ${size(250)}px;
  height: ${size(250)}px;
`;
