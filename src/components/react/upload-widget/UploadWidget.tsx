import type { JSX } from 'astro/jsx-runtime';
import uploadIcon from '../../../assets/upload.svg?url';
import { Button } from '../button/Button';
import { CustomText, DropzoneContainer, HiddenInputFile, UploadIcon } from './styles';
import { useRef, useState } from 'react';
import { useReleaseUpload } from '../release-upload/ReleaseUploadHook';
import { AcceptedExtensions } from './AcceptedExtensions';
import { ColorPalette } from 'image-palette-extractor';

export default function UploadWidget(): JSX.Element {
  const [isDragOver, setDragOver] = useState<boolean>(false);
  const { showAlert, hideAlert } = useReleaseUpload();
  const inputRef = useRef<HTMLInputElement>(null);

  const getAllowedExtensions = (): string => {
    return Object.keys(AcceptedExtensions)
      .map(extension => `image/${extension}`)
      .join(',');
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>, isDraggingOver: boolean) => {
    const actionHandler = isDraggingOver ? showAlert : hideAlert;

    event.stopPropagation();
    event.preventDefault();

    setDragOver(isDraggingOver);
    actionHandler();
  };

  const handleOnDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    handleDragOver(event, false);
    const { files } = event.dataTransfer;
    const file = files.item(0);
    const { name } = file || {};

    if (name && !isValidFileExtension(name)) return console.error('[DEBUG] Format not supported');

    console.log(await extractImagePalette(file));
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files.length > 0) {
      const file = files[0];

      console.log(await extractImagePalette(file));
    }
  };

  const extractImagePalette = async (file: File | null): Promise<string[] | null> => {
    if (!file) return null;

    const base64 = await loadFileBase64(file);

    if (!base64) return null;

    try {
      return ColorPalette.getColors(base64, 10);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const isValidFileExtension = (fileName: string): boolean => {
    const fileExtension = fileName.split('.')?.at(-1) ?? '';

    return fileExtension in AcceptedExtensions;
  };

  const loadFileBase64 = async (file: File): Promise<string | null> => {
    const reader = new FileReader();

    return new Promise<string | null>((resolve, reject) => {
      reader.onerror = () => {
        reject();
      };

      reader.onloadend = () => {
        const base64String = reader.result as string;

        resolve(base64String);
      };

      reader.readAsDataURL(file);
    });
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
      <HiddenInputFile
        ref={inputRef}
        type="file"
        id="released-file"
        aria-hidden="true"
        multiple={false}
        accept={getAllowedExtensions()}
        onChange={handleFileChange}
      />
    </DropzoneContainer>
  );
}
