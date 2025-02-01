import type { JSX } from 'react';
import { CardContainer, CardText } from './style';

export interface CardColorProps {
  color: string;
}

export default function CardColor({ color }: CardColorProps): JSX.Element {
  return (
    <CardContainer theme={{ cardColor: color }}>
      <CardText>{color}</CardText>
    </CardContainer>
  );
}
