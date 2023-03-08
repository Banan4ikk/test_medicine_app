import React, { FC, PropsWithChildren } from 'react';
import { StyledImageContainer, WhiteContainer } from './styles';
import { FillImage, ImageContainer } from '../../styles/global';

const ContainerWithLogo: FC<PropsWithChildren> = ({ children }) => {
  return (
    <WhiteContainer>
      <StyledImageContainer height={60} width={60}>
        <FillImage source={require('../../../assets/logo.png')} />
      </StyledImageContainer>
      {children}
    </WhiteContainer>
  );
};

export default ContainerWithLogo;
