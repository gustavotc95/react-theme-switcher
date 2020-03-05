import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  font-weight: 700;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  box-shadow: 0px 10px 13px -8px rgba(0,0,0,0.57);
`;