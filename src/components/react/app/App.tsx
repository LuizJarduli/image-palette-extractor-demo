import type { JSX } from 'react';
import UploadWidget from '../upload/upload-widget/UploadWidget';
import ReleaseUploadProvider from '../upload/release-upload/ReleaseUploadProvider';
import ReleaseUpload from '../upload/release-upload/ReleaseUpload';
import DialogProvider from '../dialog/DialogProvider';

export default function App(): JSX.Element {
  return (
    <DialogProvider>
      <ReleaseUploadProvider>
        <ReleaseUpload />
        <UploadWidget />
      </ReleaseUploadProvider>
    </DialogProvider>
  );
}
