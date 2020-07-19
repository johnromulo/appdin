import React from 'react';

import { Container, Content, Text, Loading } from './styles';

interface ButtonCustomProps {
  text: string;
  onPress?: () => void;
  loading?: boolean;
}

const ButtonClearCustom: React.FC<ButtonCustomProps> = ({
  text,
  onPress,
  loading,
}: ButtonCustomProps) => {
  return (
    <Container>
      <Content onPress={onPress}>
        {loading ? <Loading /> : <Text>{text}</Text>}
      </Content>
    </Container>
  );
};

export default ButtonClearCustom;
