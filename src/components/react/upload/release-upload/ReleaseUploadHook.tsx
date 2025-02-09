import { useContext } from 'react';
import { ReleaseUploadContext } from './ReleaseUploadProvider';

export const useReleaseUpload = () => {
  const context = useContext(ReleaseUploadContext);

  if (!context) {
    throw new Error('useReleaseUpload must be used within a ReleaseUploadProvider');
  }

  return context;
};
