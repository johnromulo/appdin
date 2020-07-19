import React from 'react';

import { Container, Content } from './styles';

interface ButtonCustomProps {
  icon: React.FC<any>;
  onPress?: () => void;
}

const ButtonIconCustom: React.FC<ButtonCustomProps> = ({
  icon,
  onPress,
}: ButtonCustomProps) => {
  const IconInput = icon;

  return (
    <Container>
      <Content onPress={onPress}>
        <IconInput />
      </Content>
    </Container>
  );
};

export default ButtonIconCustom;
