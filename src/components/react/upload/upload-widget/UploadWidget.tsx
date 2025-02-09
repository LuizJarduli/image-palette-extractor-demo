import type { JSX } from 'astro/jsx-runtime';
import { DropzoneContainer } from './styles';
import React from 'react';
import UploadContent from '../upload-content/UploadContent';
import { UploadProvider, useUploadContext } from './UploadContext';

const UploadWidgetInner: React.FC = () => {
  const { isDragOver, handleDragOver, handleOnDrop } = useUploadContext();

  return (
    <DropzoneContainer
      $isDragOver={isDragOver}
      onDragOver={event => handleDragOver(event, true)}
      onDragLeave={event => handleDragOver(event, false)}
      onDrop={handleOnDrop}
    >
      <UploadContent />
    </DropzoneContainer>
  );
};

export default function UploadWidget(): JSX.Element {
  return (
    <UploadProvider>
      <UploadWidgetInner />
    </UploadProvider>
  );
}
