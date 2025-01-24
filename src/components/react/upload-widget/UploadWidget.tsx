import type { JSX } from 'astro/jsx-runtime';
import uploadIcon from '../../../assets/upload.svg?url';
import { Button } from '../button/Button';
import { CustomText, DropzoneContainer, HiddenInputFile, UploadIcon } from './styles';
import { useRef, useState } from 'react';
import { useReleaseUpload } from '../release-upload/ReleaseUploadHook';

export default function UploadWidget(): JSX.Element {
  const [isDragOver, setDragOver] = useState<boolean>(false);
  const { showAlert, hideAlert } = useReleaseUpload();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>, isDraggingOver: boolean) => {
    event.preventDefault();

    const actionHandler = isDraggingOver ? showAlert : hideAlert;

    setDragOver(isDraggingOver);
    actionHandler();
  };

  const handleOnDrop = (event: React.DragEvent<HTMLDivElement>) => {
    handleDragOver(event, false);
  };

  return (
    <DropzoneContainer
      $isDragOver={isDragOver}
      onDragOver={event => handleDragOver(event, true)}
      onDragLeave={event => handleDragOver(event, false)}
      onDrop={event => handleOnDrop(event)}
    >
      <UploadIcon src={uploadIcon} alt="Upload Icon" />
      <CustomText>Drop images here</CustomText>
      <CustomText>Or</CustomText>
      <Button label="Upload a file" size="small" onClick={() => inputRef.current?.click()} />

      {/* Input file */}
      <HiddenInputFile ref={inputRef} type="file" id="released-file" aria-hidden="true" />
    </DropzoneContainer>
  );
}
