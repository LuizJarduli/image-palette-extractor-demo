import { keyframes, styled } from 'styled-components';

export const popIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const DialogWrapper = styled.dialog`
  border: none;
  z-index: 10;
  animation: ${popIn} 0.2s ease-out forwards;

  &[open] {
    display: block;
    margin: auto;
    padding: 0;
    overflow: hidden;
    border-radius: 8px;
    background-color: transparent;
  }

  &:focus {
    outline: none !important;
  }

  &::backdrop {
    backdrop-filter: blur(0.25rem);
  }
`;

export const DialogHeader = styled.header`
  display: block;
  padding: 1rem;
  color: #ffffff;
  background-color: #000000;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  &.success {
    background-color: rgb(65, 149, 68);
  }

  &.error {
    background-color: #f44336;
  }

  &.warning {
    background-color: #ff9800;
  }

  &.info {
    background-color: #2196f3;
  }
`;

export const DialogContent = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  background-color: #09090b;
  color: #ffffff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 0.75rem;
`;
