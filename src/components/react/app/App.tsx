import type { JSX } from 'react';
import ReleaseUploadProvider from '../release-upload/ReleaseUploadProvider';
import ReleaseUpload from '../release-upload/ReleaseUpload';
import UploadWidget from '../upload-widget/UploadWidget';

export default function App(): JSX.Element {
  return (
    <ReleaseUploadProvider>
      <ReleaseUpload />
      <UploadWidget />
    </ReleaseUploadProvider>
  );
}
