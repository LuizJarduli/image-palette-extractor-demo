import type { JSX } from 'react';
import { CardContainer, CardText } from './style';
import { getLuminanceFromHex } from 'image-palette-extractor/dist/utils';

export interface CardColorProps {
  color: string;
}

export default function CardColor({ color: cardColor }: CardColorProps): JSX.Element {
  const textColor = getLuminanceFromHex(cardColor) < 0.5 ? '#FFFFFF' : '#424242';

  return (
    <CardContainer theme={{ cardColor }}>
      <CardText theme={{ textColor }}>{cardColor}</CardText>
    </CardContainer>
  );
}
