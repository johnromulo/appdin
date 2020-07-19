import React, { useState } from 'react';

import { TextInputProps } from 'react-native';

import {
  Wrap,
  Container,
  Input,
  IconContainer,
  ButtonVibility,
  IconVisibility,
  IconVisibilityOff,
  ContainerError,
  TextError,
} from './styles';

interface InputFormProps extends TextInputProps {
  icon?: React.FC<any>;
  secureTextEntry?: boolean;
  error?: boolean;
  mensageError?: string;
}

const InputForm: React.FC<InputFormProps> = ({
  icon,
  secureTextEntry,
  error,
  mensageError,
  ...rest
}: InputFormProps) => {
  const IconInput = icon;

  const [visibility, setVisibility] = useState(false);

  return (
    <Wrap>
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
      {error && (
        <ContainerError>
          <TextError>{mensageError || ''}</TextError>
        </ContainerError>
      )}
    </Wrap>
  );
};

export default InputForm;
