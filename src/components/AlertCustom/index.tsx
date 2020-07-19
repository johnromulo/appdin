import React, { useRef, useEffect, useCallback } from 'react';
import { Animated } from 'react-native';

import { IAlertProps } from '@interfaces/IAlertProps';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import {
  Container,
  ContentAnimated,
  Header,
  Title,
  Main,
  Message,
  Button,
  TextButton,
} from './styles';

type ParamList = {
  Alert: IAlertProps;
};

const TIME_ANIMATION = 550;

const ModalCustom: React.FC = () => {
  const { goBack } = useNavigation();

  const slideAnim = useRef(new Animated.Value(800)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: TIME_ANIMATION,
      useNativeDriver: false,
    }).start();
  }, [slideAnim]);

  const { params } = useRoute<RouteProp<ParamList, 'Alert'>>();

  const slideOut = useCallback(() => {
    Animated.timing(slideAnim, {
      toValue: 800,
      duration: TIME_ANIMATION,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      goBack();
    }, TIME_ANIMATION);
  }, [slideAnim, goBack]);

  return (
    <Container>
      <ContentAnimated
        style={[
          {
            top: slideAnim,
          },
        ]}
      >
        <Header>
          <Title>{params.title}</Title>
        </Header>
        <Main>
          <Message>{params.message}</Message>
        </Main>
        <Button onPress={() => slideOut()}>
          <TextButton>Ok</TextButton>
        </Button>
      </ContentAnimated>
    </Container>
  );
};

export default ModalCustom;
