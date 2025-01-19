import type { JSX } from 'astro/jsx-runtime';
import uploadIcon from '../../../assets/upload.svg?url';
import { Button } from '../button/Button';
import { CustomText, DropzoneContainer, UploadIcon } from './styles';
import { useState } from 'react';
import { useReleaseUpload } from '../release-upload/ReleaseUploadHook';

export default function UploadWidget(): JSX.Element {
  const [isDragOver, setDragOver] = useState<boolean>(false);
  const { showAlert, hideAlert } = useReleaseUpload();

  const handleDragOver = (isDraggingOver: boolean) => {
    const actionHandler = isDraggingOver ? showAlert : hideAlert;

    setDragOver(isDraggingOver);
    actionHandler();
  };

  return (
    <DropzoneContainer
      $isDragOver={isDragOver}
      onDragOver={() => handleDragOver(true)}
      onDragLeave={() => handleDragOver(false)}
    >
      <UploadIcon src={uploadIcon} alt="Upload Icon" />
      <CustomText>Drop images here</CustomText>
      <CustomText>Or</CustomText>
      <Button label="Upload a file" size="small" />
    </DropzoneContainer>
  );
}
