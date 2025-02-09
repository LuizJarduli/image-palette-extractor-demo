import type { JSX } from 'react';
import {
  ColorContainer,
  Divider,
  FooterContainer,
  ImageContainer,
  ResultWidgetContainer,
} from './style';
import CardColor from '../../card-color/CardColor';
import { Button } from '../../button/Button';
import { useUploadContext } from '../upload-widget/UploadContext';

export interface ResultWidgetProps {
  colors: string[];
  imageSrc: string;
}

export default function ResultWidget({ colors, imageSrc }: ResultWidgetProps): JSX.Element {
  const { setLoadingState, setExtractedColors } = useUploadContext();

  const resetToUploadState = () => {
    setLoadingState(null);
    setExtractedColors(null);
  };

  return (
    <>
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
      <FooterContainer>
        <Button label="Upload a new file" size="small" onClick={resetToUploadState} />
      </FooterContainer>
    </>
  );
}
