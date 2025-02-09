import type { JSX } from 'react';
import ProgressWidget from '../../progress-widget/ProgressWidget';
import Upload from '../Upload';
import { useUploadContext } from '../upload-widget/UploadContext';
import { AcceptedExtensions } from '../upload-widget/AcceptedExtensions';
import ResultWidget from '../result-widget/ResultWidget';

export default function UploadContent(): JSX.Element {
  const { loadingState, extractedColors, handleFileChange, imageSrc } = useUploadContext();

  const getAllowedExtensions = (): string => {
    return Object.keys(AcceptedExtensions)
      .map(extension => `image/${extension}`)
      .join(',');
  };

  if (extractedColors) {
    return <ResultWidget colors={extractedColors} imageSrc={imageSrc} />;
  }

  return (
    <>
      {loadingState ? (
        <ProgressWidget label={loadingState[0]} value={loadingState[1]} />
      ) : (
        <Upload onFileChange={handleFileChange} accept={getAllowedExtensions()} multiple={false} />
      )}
    </>
  );
}
