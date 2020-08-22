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
  Prefix,
  TextContentClick,
  Text,
  Sufix,
} from './styles';

type CheckBoxFormProps = CheckBoxProps & {
  prefix?: string;
  text: string;
  sufix?: string;
  textError?: string;
  textPress?: () => void;
};

const CheckboxForm: React.FC<CheckBoxFormProps> = ({
  textError,
  prefix,
  sufix,
  text,
  textPress,
  ...rest
}: CheckBoxFormProps) => {
  return (
    <Wrap>
      <Container>
        <CheboxContent>
          <CheckBox {...rest} />
        </CheboxContent>
        <ContentText>
          {prefix && <Prefix>{prefix}</Prefix>}
          <TextContentClick onPress={textPress}>
            <Text>{text}</Text>
          </TextContentClick>
          {sufix && <Sufix>{sufix}</Sufix>}
        </ContentText>
      </Container>
      <ContainerError>
        <TextError>{textError}</TextError>
      </ContainerError>
    </Wrap>
  );
};

export default CheckboxForm;
