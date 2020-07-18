import React from 'react';
import Modal from 'react-native-modal';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Content,
  Header,
  Title,
  Main,
  Message,
  Button,
  TextButton,
} from './styles';

const ModalCustom: React.FC = () => {
  const { goBack } = useNavigation();
  return (
    <Container>
      {/* <Modal
        isVisible
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        backdropColor="#B4B3DB"
        backdropOpacity={0.8}
      >
        <Header>
          <Title>Atenção!</Title>
        </Header>
        <Content>
          <Message>Mensagem do modal</Message>
        </Content>
        
      </Modal> */}
      <Content>
        <Header>
          <Title>Atenção !</Title>
        </Header>
        <Main>
          <Message>
            Mensagem do modal mensagem do modal mensagem do modal mensagem do
            modal.
          </Message>
        </Main>
        <Button onPress={() => goBack()}>
          <TextButton>OK</TextButton>
        </Button>
      </Content>
    </Container>
  );
};

export default ModalCustom;
