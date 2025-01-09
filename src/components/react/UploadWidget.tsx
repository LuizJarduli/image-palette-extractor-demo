import type { JSX } from 'astro/jsx-runtime';
import styled from 'styled-components';

const DropzoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  margin: 0 auto;
  border: 2px dashed #cfcfcf;
  border-radius: 10px;
  background-color: inherit;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export default function UploadWidget(): JSX.Element {
  return <DropzoneContainer></DropzoneContainer>;
}
