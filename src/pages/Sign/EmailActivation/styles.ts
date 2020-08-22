import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Platform } from 'react-native';
import LottieView from 'lottie-react-native';

import sendMailLottie from '@assets/lottie/sendmail.json';

import { size } from '@styles/responsive.ts';

export const Wrap = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
`;

export const Scroll = styled.ScrollView``;

export const Header = styled.View`
  padding: ${size(10)}px ${size(20)}px;
  justify-content: center;
  height: ${size(70)}px;
`;

export const HeaderButtonContainer = styled.View``;

export const Main = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.secondary.type2};
  align-items: center;
`;

export const Content = styled.View`
  width: 100%;
  padding: ${size(10)}px ${size(30)}px;
`;

export const InputContent = styled.View`
  width: 100%;
  padding: ${size(10)}px ${size(30)}px;
`;

export const MakeSendCodeContainer = styled.View`
  padding: ${size(14)}px ${size(30)}px;
`;

export const MakeSendCodeText = styled.Text`
  font-size: ${size(24)}px;
  color: ${props => props.theme.colors.natural.type1};
  text-align: center;
`;

export const InfoSendCodeText = styled.Text`
  font-size: ${size(14)}px;
  color: ${props => props.theme.colors.natural.type2};
  margin-top: ${size(14)}px;
`;

export const InfoSendCodeTextExemple = styled.Text`
  font-size: ${size(14)}px;
  color: ${props => props.theme.colors.natural.type2};
  font-style: italic;
  font-weight: bold;
`;

export const SignContent = styled.View`
  flex-direction: row;
  width: 100%;
  padding: ${size(10)}px ${size(22)}px;
  align-items: center;
  justify-content: center;
`;

export const TextInfoSignUp = styled.Text`
  font-size: ${size(14)}px;
  color: ${props => props.theme.colors.natural.type2};
`;

export const IconAccountKey = styled(Icon).attrs(props => ({
  color: props.theme.colors.natural.type2,
  size: size(18),
  name: 'account-key',
}))``;

export const IconArrowLeft = styled(Icon).attrs(props => ({
  color: props.theme.colors.natural.type1,
  size: size(22),
  name: 'arrow-left',
}))``;

export const LottieContent = styled.View`
  justify-content: center;
  align-items: center;
`;

export const SendMailAnimation = styled(LottieView).attrs(props => ({
  source: sendMailLottie,
  loop: false,
  autoPlay: false,
  speed: 2,
  colorFilters: [
    {
      keypath: 'Yellow Solid 1',
      color: props.theme.colors.secondary.type2,
    },
  ],
}))`
  width: ${size(220)}px;
  height: ${size(220)}px;
`;
