import { styled, css } from 'styled-components';
import type { ButtonProps } from './Button';

export const DSButton = styled.button<Omit<ButtonProps, 'label'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
        `;
      case 'medium':
        return css`
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        `;
      case 'large':
        return css`
          padding: 1rem 2rem;
          font-size: 1.125rem;
        `;
      default:
        return css`
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        `;
    }
  }};

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: '#FFF';
          color: '#15151a';

          &:hover {
            background-color: #15151a;
            color: #fff;
          }

          &:active {
            background-color: rgba(21, 21, 26, 0.5);
          }
        `;
      case 'secondary':
        return css`
          background-color: #15151a;
          color: #fff;

          &:hover {
            background-color: '#FFF';
            color: '#15151a';
          }

          &:active {
            background-color: rgba(178, 178, 178, 0.5);
          }
        `;
      default:
        return css`
          background-color: '#FFF';
          color: '#15151a';

          &:hover {
            background-color: #15151a;
            color: #fff;
          }

          &:active {
            background-color: rgba(21, 21, 26, 0.5);
          }
        `;
    }
  }};

  &:disabled {
    cursor: not-allowed;
  }
`;
