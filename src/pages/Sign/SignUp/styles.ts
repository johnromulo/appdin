import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Platform } from 'react-native';

import { size } from '@styles/responsive.ts';

export const Wrap = styled.SafeAreaView`
  flex: 1;
`;

export const MakeSignUpContainer = styled.View`
  padding: ${props =>
    `${props.theme.spacings.sp3}px ${props.theme.spacings.sp8}px`};
`;

export const MakeSignUpText = styled.Text`
  font-size: ${props => props.theme.fontsSizes['2xl']}px;
  text-align: center;
  color: ${props => props.theme.colors.natural.type1};
  margin: ${props => props.theme.spacings.sp6}px 0;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
`;

export const Scroll = styled.ScrollView``;

export const Header = styled.View`
  padding: ${props =>
    `${props.theme.spacings.sp3}px ${props.theme.spacings.sp5}px`};
  justify-content: center;
  height: ${size(70)}px;
`;

export const HeaderButtonContainer = styled.View``;

export const Main = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.secondary.type2};
  align-items: center;
  padding-bottom: ${props => props.theme.spacings.sp5}px;
`;

export const Content = styled.View`
  width: 100%;
  padding: ${props =>
    `${props.theme.spacings.sp3}px ${props.theme.spacings.sp8}px`};
`;

export const IconAccountOutline = styled(Icon).attrs(props => ({
  color: props.theme.colors.natural.type2,
  size: props.theme.fontsSizes.sm,
  name: 'account-outline',
}))``;

export const IconMailOutline = styled(Icon).attrs(props => ({
  color: props.theme.colors.natural.type2,
  size: props.theme.fontsSizes.sm,
  name: 'email-outline',
}))``;

export const IconLockOutline = styled(Icon).attrs(props => ({
  color: props.theme.colors.natural.type2,
  size: props.theme.fontsSizes.sm,
  name: 'key-outline',
}))``;

export const IconArrowLeft = styled(Icon).attrs(props => ({
  color: props.theme.colors.natural.type1,
  size: props.theme.fontsSizes['2xl'],
  name: 'arrow-left',
}))``;
