import { styled } from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.cardColor};
  padding: 0.5rem;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;

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
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 0.5rem;
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      z-index: 1;
    }

    span {
      display: block;
    }
  }
`;

export const CardText = styled.span`
  color: ${props => props.theme.textColor};
  font-size: 0.75rem;
  font-weight: 700;
  margin: 0;
  transition: all 0.3s ease;
  z-index: 2;
`;
