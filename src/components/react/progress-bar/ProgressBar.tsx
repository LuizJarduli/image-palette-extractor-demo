import type { JSX } from 'astro/jsx-runtime';
import { styled } from 'styled-components';

const ProgressBarTrack = styled.div`
  width: 100%;
  height: 0.5rem;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background-color: ${props => props.theme.trackColor};

  &:before {
    content: ' ';
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.theme.progressWidth};
    background-color: ${props => props.theme.progressColor};
    max-width: 100%;
    border-radius: 20px;
    position: absolute;
    transition: width 0.4s ease;
  }
`;

export interface ProgressBarProps {
  max: number;
  value: number;
}

export default function ProgressBar({ max, value }: ProgressBarProps): JSX.Element {
  const progressColor = '#12d18e';
  const trackColor = '#35383f';
  const progressWidth = `${value}%`;

  return (
    <ProgressBarTrack
      theme={{ progressColor, trackColor, progressWidth }}
      role="progressbar"
      aria-label={`Progress: ${value}% out of ${max}%`}
    />
  );
}
