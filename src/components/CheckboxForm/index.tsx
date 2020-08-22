import React from 'react';
import { CheckBoxProps } from '@react-native-community/checkbox';

import {
  Wrap,
  Container,
  CheboxContent,
  CheckBox,
  ContentText,
  ContainerError,
  TextError,
} from './styles';

type CheckboxFormProps = React.Props<any> &
  CheckBoxProps & {
    textError: string;
  };

const CheckboxForm: React.FC<CheckboxFormProps> = ({
  children,
  textError,
  ...rest
}: CheckboxFormProps) => {
  return (
    <Wrap>
      <Container>
        <CheboxContent>
          <CheckBox {...rest} />
        </CheboxContent>
        <ContentText>{children}</ContentText>
      </Container>
      <ContainerError>
        <TextError>{textError}</TextError>
      </ContainerError>
    </Wrap>
  );
};

export default CheckboxForm;
