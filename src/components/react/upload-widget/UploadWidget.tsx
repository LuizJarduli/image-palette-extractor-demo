import type { JSX } from 'astro/jsx-runtime';
import uploadIcon from '../../assets/upload.svg?url';
import { Button } from '../button/Button';
import { CustomText, DropzoneContainer, UploadIcon } from './styles';

export default function UploadWidget(): JSX.Element {
  return (
    <DropzoneContainer $isDragOver={true}>
      <UploadIcon src={uploadIcon} alt="Upload Icon" />
      <CustomText>Drop images here</CustomText>
      <CustomText>Or</CustomText>
      <Button label="Upload a file" size="small" />
    </DropzoneContainer>
  );
}
