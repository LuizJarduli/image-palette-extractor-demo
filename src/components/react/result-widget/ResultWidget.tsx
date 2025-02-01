import type { JSX } from 'react';
import { ColorContainer, Divider, ImageContainer, ResultWidgetContainer } from './style';
import CardColor from '../card-color/CardColor';

export interface ResultWidgetProps {
  colors: string[];
  imageSrc: string;
}

export default function ResultWidget({ colors, imageSrc }: ResultWidgetProps): JSX.Element {
  return (
    <ResultWidgetContainer>
      <ImageContainer>
        <img src={imageSrc} alt="Uploaded image" />
      </ImageContainer>
      <Divider />
      <ColorContainer>
        {colors.map((color, index) => (
          <CardColor key={`${color}-${index}`} color={color} />
        ))}
      </ColorContainer>
    </ResultWidgetContainer>
  );
}
