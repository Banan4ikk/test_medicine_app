import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1e63ee;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const LogoImage = styled.Image`
  width: 112px;
  height: 112px;
`;

type PropsTitle = { fontSize?: number; paddingBottom?: number; paddingTop?: number };

export const Title = styled.Text<PropsTitle>`
  font-family: 'Manrope-SemiBold';
  font-size: ${props => `${props.fontSize || 30}px`};
  line-height: 40px;
  text-align: center;
  color: #fff;
  margin-top: 16px;
  padding-bottom: ${({ paddingBottom }) => `${paddingBottom}px`};
`;

export const RegisterContainer = styled.View<{ bottom?: number }>`
  width: 100%;
  margin-top: 50px;
  transform: translateY(120px);
`;
