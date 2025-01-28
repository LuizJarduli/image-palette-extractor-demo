export const LoadingState: Record<string, [string, number]> = {
  UPLOADING_FILE: ['Uploading file...', 0],
  PROCESSING_FILE: ['Processing file...', 33],
  EXTRACTING_PALETTE: ['Extracting palette...', 66],
  DONE: ['Done', 100],
};

export enum LoadingStateLabel {
  UPLOADING_FILE = 'Uploading file...',
  PROCESSING_FILE = 'Processing file...',
  EXTRACTING_PALETTE = 'Extracting palette...',
  DONE = 'Done',
}
