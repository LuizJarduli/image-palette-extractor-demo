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

  ${({ $isDragOver }) =>
    $isDragOver &&
    css`
      background-image: linear-gradient(
        90deg,
        rgba(57, 57, 70, 0),
        rgba(57, 57, 70, 0.5),
        rgba(57, 57, 70, 0)
      );
      background-size: 100px 100%;
      background-repeat: no-repeat;
      animation: ${shimmer} 1s ease-in infinite;
    `}
`;

export const UploadIcon = styled.img`
  display: block;
  width: 3.125rem;
`;

export const CustomText = styled.p`
  font-size: 0.75rem;
  color: #fff;
`;
