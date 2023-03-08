import styled from 'styled-components/native';
import { textBlack } from '../../../styles/colors';

export const FieldContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const FieldText = styled.Text`
  font-family: 'Manrope-SemiBold';
  font-size: 13px;
  line-height: 16px;
  color: ${textBlack};
  max-width: 65px;
`;
