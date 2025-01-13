import type { JSX } from 'astro/jsx-runtime';
import { styled } from 'styled-components';
import uploadIcon from '../../assets/upload.svg?url';
import { Button } from './Button';

const DropzoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #22222a;
  cursor: pointer;
  row-gap: 0.5rem;
  padding: 2rem;
`;

const UploadIcon = styled.img`
  display: block;
  width: 3.125rem;
`;

const CustomText = styled.p`
  font-size: 0.75rem;
  color: #fff;
`;

export default function UploadWidget(): JSX.Element {
  return (
    <DropzoneContainer>
      <UploadIcon src={uploadIcon} alt="Upload Icon" />
      <CustomText>Drop images here</CustomText>
      <CustomText>Or</CustomText>
      <Button label="Upload a file" size="small" />
    </DropzoneContainer>
  );
}
