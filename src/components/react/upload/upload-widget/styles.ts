import { styled, keyframes, css } from 'styled-components';

export const shimmer = keyframes`
  from {
		background-position: -1000px;
	}

	to {
		background-position: 1000px;
	}
`;

export const scaleIn = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(2);
  }

  100% {
    transform: scale(1);
  }
`;

export const DropzoneContainer = styled.div<{ $isDragOver?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #22222a;
  cursor: pointer;
  row-gap: 0.5rem;
  padding: 2rem;
  position: relative;

  ${({ $isDragOver }) =>
    $isDragOver &&
    css`
      background: #22222a
        linear-gradient(
          -45deg,
          rgba(57, 57, 70, 0) 30%,
          rgba(57, 57, 70, 0.5) 50%,
          rgba(57, 57, 70, 0) 70%
        );
      background-size: 200%;
      background-repeat: no-repeat;
      animation: ${shimmer} 1s ease-in infinite;

      &:after {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        z-index: 2;
        border: 2px #0174f7 solid;
        background-color: rgba(1, 116, 247, 0.25);
      }
    `}
`;
