import { styled } from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 1.875rem;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.cardColor};
  padding: 0.5rem;
`;

export const CardText = styled.span`
  color: ${props => props.theme.textColor ?? 'black'};
  font-size: 0.75rem;
  font-weight: 500;
  margin: 0;
`;
