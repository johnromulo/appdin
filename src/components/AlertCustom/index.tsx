import React, { useRef, useEffect, useCallback } from 'react';
import { Animated } from 'react-native';

import { IAlertProps } from '@interfaces/IAlertProps';

import { IAnimatedLottieView } from '@interfaces/IAnimatedLottieView';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import {
  Container,
  ContentAnimated,
  LottieContent,
  SuccessAnimation,
  ErrorAnimation,
  Header,
  Title,
  Main,
  Scroll,
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
  const lottieRef = useRef<IAnimatedLottieView | any>(null);

  const slideAnim = useRef(new Animated.Value(800)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: TIME_ANIMATION,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      if (lottieRef.current) {
        lottieRef.current.play();
      }
    }, TIME_ANIMATION + 100);
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
        {params.typeAlert !== 'info' && (
          <LottieContent>
            {params.typeAlert === 'success' && (
              <SuccessAnimation ref={lottieRef} />
            )}
            {params.typeAlert === 'error' && <ErrorAnimation ref={lottieRef} />}
          </LottieContent>
        )}
        <Header>
          <Title>{params.title}</Title>
        </Header>
        <Scroll>
          <Main>
            <Message>{params.message}</Message>
          </Main>
        </Scroll>
        {params.buttons?.map((button, index) => (
          <Button
            key={index.toString()}
            typeAlert={button.styleButton || 'info'}
            onPress={async () => {
              if (button.onPress) {
                await button.onPress();
              }
              slideOut();
            }}
          >
            <TextButton>{button.text}</TextButton>
          </Button>
        ))}
      </ContentAnimated>
    </Container>
  );
};

export default ModalCustom;
