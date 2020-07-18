import React, { useState } from 'react';

import { TextInputProps } from 'react-native';

import {
  Container,
  Input,
  IconContainer,
  ButtonVibility,
  IconVisibility,
  IconVisibilityOff,
} from './styles';

interface InputFormProps extends TextInputProps {
  icon?: React.FC<any>;
  secureTextEntry?: boolean;
}

const InputForm: React.FC<InputFormProps> = ({
  icon,
  secureTextEntry,
  ...rest
}: InputFormProps) => {
  const IconInput = icon;

  const [visibility, setVisibility] = useState(false);

  return (
    <Container>
      {IconInput && (
        <IconContainer>
          <IconInput />
        </IconContainer>
      )}
      <Input secureTextEntry={secureTextEntry && !visibility} {...rest} />
      {secureTextEntry && (
        <ButtonVibility
          onPress={() => {
            setVisibility(!visibility);
          }}
        >
          {visibility ? <IconVisibility /> : <IconVisibilityOff />}
        </ButtonVibility>
      )}
    </Container>
  );
};

export default InputForm;
