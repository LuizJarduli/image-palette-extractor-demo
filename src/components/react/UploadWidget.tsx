import type { JSX } from 'astro/jsx-runtime';
import styled from 'styled-components';
import uploadIcon from '../../assets/upload.svg?url';

const DropzoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #22222a;
  cursor: pointer;
`;

export default function UploadWidget(): JSX.Element {
  return (
    <DropzoneContainer>
      <img src={uploadIcon} alt="Upload Icon" />
    </DropzoneContainer>
  );
}
