import React, { FC } from 'react';
import { HeaderContainer, StyledText } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CrossIcon from '../../../svg/CrossIcon';

type HeaderProps = {
  withCrossIcon?: boolean;
  title: string;
};

const NavigationHeader: FC<HeaderProps> = ({ withCrossIcon, title }) => {
  const insets = useSafeAreaInsets();

  return (
    <HeaderContainer style={{ marginTop: insets.top + 10 }}>
      {withCrossIcon && <CrossIcon style={{ marginRight: 15 }} />}
      <StyledText>{title}</StyledText>
    </HeaderContainer>
  );
};

export default NavigationHeader;
