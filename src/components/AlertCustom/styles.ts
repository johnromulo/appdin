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
  padding: ${props => props.theme.spacings.sp3}px;
  border-radius: ${props => props.theme.border.radius.small};
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.secondary.type1};
`;

export const ContentAnimated = Animated.createAnimatedComponent(Content);

export const Header = styled.View``;

export const Title = styled.Text`
  font-size: ${props => props.theme.fontsSizes.xl}px;
  color: ${props => props.theme.colors.natural.type1};
  font-weight: bold;
`;

export const Main = styled.View`
  padding: ${props => props.theme.spacings.sp3}px;
`;

export const Scroll = styled.ScrollView`
  max-height: ${size(200)}px;
`;

export const Message = styled.Text`
  font-size: ${props => props.theme.fontsSizes.sm}px;
  color: ${props => props.theme.colors.natural.type1};
`;

interface ButtonProps {
  typeAlert: 'success' | 'error' | 'info';
}

export const Button = styled(RectButton)<ButtonProps>`
  margin: ${props => props.theme.spacings.sp2}px;
  padding: ${props =>
    `${props.theme.spacings.sp3}px ${props.theme.spacings.sp8}px`};
  border-radius: ${props => props.theme.border.radius.medium};
  background-color: ${props =>
    (props.typeAlert === 'success' && props.theme.colors.suport.type1) ||
    (props.typeAlert === 'error' && props.theme.colors.suport.type4) ||
    (props.typeAlert === 'info' && props.theme.colors.suport.type3)};
`;

export const TextButton = styled.Text`
  font-size: ${props => props.theme.fontsSizes.sm}px;
  font-weight: bold;
  color: ${props => props.theme.colors.natural.type1};
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
