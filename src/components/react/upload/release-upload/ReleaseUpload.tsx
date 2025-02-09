import type { JSX } from 'react';
import {
  ReleaseUploadContainer,
  ReleaseUploadIconContainer,
  ReleaseUploadSnackBar,
  ReleaseUploadSnackBarText,
} from './style';
import releaseUploadIcon from '../../../../assets/release-upload.svg?url';
import { useReleaseUpload } from './ReleaseUploadHook';
import { UploadIcon } from '../styles';

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
