import type { JSX } from 'react';
import {
  ReleaseUploadContainer,
  ReleaseUploadIconContainer,
  ReleaseUploadSnackBar,
  ReleaseUploadSnackBarText,
} from './style';
import { UploadIcon } from '../upload-widget/styles';
import releaseUploadIcon from '../../../assets/release-upload.svg?url';
import { useReleaseUpload } from './ReleaseUploadHook';

export default function ReleaseUpload(): JSX.Element | null {
  const { show } = useReleaseUpload();

  if (!show) return null;

  return (
    <ReleaseUploadContainer>
      <ReleaseUploadIconContainer>
        <UploadIcon src={releaseUploadIcon} alt="Release upload icon" />
      </ReleaseUploadIconContainer>
      <ReleaseUploadSnackBar>
        <ReleaseUploadSnackBarText>Release the file to begin upload</ReleaseUploadSnackBarText>
      </ReleaseUploadSnackBar>
    </ReleaseUploadContainer>
  );
}
