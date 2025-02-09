import { keyframes, styled } from 'styled-components';

export const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const bounceUp = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }

	40% {
    transform: translateY(-30px);
  }

	60% {
    transform: translateY(-30px);
  }
`;

export const ReleaseUploadContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${slideIn} 0.2s ease-in-out forwards;
  row-gap: 1rem;
  bottom: -145px;
  left: 0;
  right: 0;
`;

export const ReleaseUploadIconContainer = styled.div`
  animation: ${bounceUp} 2s ease infinite;
`;

export const ReleaseUploadSnackBar = styled.div`
  padding: 1rem;
  display: block;
  background-color: #0174f7;
  border-radius: 45px;
`;

export const ReleaseUploadSnackBarText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #fff;
`;
