import React, { FC } from 'react';
import { ButtonStyled, ButtonText } from './styles';

const ButtonWithBorder: FC<{ color?: string; title: string }> = ({ color, title }) => {
  return (
    <ButtonStyled color={color}>
      <ButtonText>{title}</ButtonText>
    </ButtonStyled>
  );
};

export default ButtonWithBorder;
