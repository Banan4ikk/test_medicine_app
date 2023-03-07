import styled from 'styled-components/native';

type Props = {
  color?: string;
};

export const ButtonStyled = styled.TouchableHighlight<Props>`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 2px solid ${props => props.color || '#fff'};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Manrope-Bold';
  font-size: 17px;
  line-height: 22px;
  color: #fff;
`;
