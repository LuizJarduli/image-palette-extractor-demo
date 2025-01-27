import { useRef, type JSX } from 'react';
import type React from 'react';
import { CustomText, HiddenInputFile, UploadIcon } from './styles';
import { Button } from '../button/Button';
import uploadIcon from '../../../assets/upload.svg?url';

export interface UploadProps {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  multiple?: boolean;
}

export default function Upload({ onFileChange, accept, multiple }: UploadProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <UploadIcon src={uploadIcon} alt="Upload Icon" />
      <CustomText>Drop images here</CustomText>
      <CustomText>Or</CustomText>
      <Button label="Upload a file" size="small" onClick={() => inputRef.current?.click()} />

      {/* Input file */}
      <HiddenInputFile
        ref={inputRef}
        type="file"
        id="released-file"
        aria-hidden="true"
        multiple={multiple}
        accept={accept}
        onChange={onFileChange}
      />
    </>
  );
}
