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
  position: relative;
  transition: all 0.3s ease;

  span {
    display: none;
  }

  &:hover {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 0.5rem;
      z-index: 1;
    }

    span {
      display: block;
    }
  }
`;

export const CardText = styled.span`
  color: ${props => props.theme.textColor ?? 'white'};
  font-size: 0.75rem;
  font-weight: 500;
  margin: 0;
  transition: all 0.3s ease;
  z-index: 2;
`;
