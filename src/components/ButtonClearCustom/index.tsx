import React from 'react';

import { Container, Content, Text } from './styles';

interface ButtonCustomProps {
  text: string;
  onPress?: () => void;
}

const ButtonClearCustom: React.FC<ButtonCustomProps> = ({
  text,
  onPress,
}: ButtonCustomProps) => {
  return (
    <Container>
      <Content onPress={onPress}>
        <Text>{text}</Text>
      </Content>
    </Container>
  );
};

export default ButtonClearCustom;
