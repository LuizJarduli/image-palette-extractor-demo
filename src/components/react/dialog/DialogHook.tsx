import { useContext } from 'react';
import { DialogContext } from './DialogProvider';

export const useDialog = () => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider!');
  }

  return context;
};
