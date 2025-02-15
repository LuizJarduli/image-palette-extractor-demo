import { createContext, useCallback, useState } from 'react';
import Dialog from './Dialog';

export interface DialogProps {
  title: string;
  message: string;
  variant?: 'success' | 'error' | 'warning' | 'info';
  onClose?: VoidFunction;
  timeout?: number;
}

export interface DialogContextData {
  showDialog: (props: DialogProps) => void;
}

export const DialogContext = createContext<DialogContextData | undefined>(undefined);

export default function DialogProvider({ children }: React.PropsWithChildren) {
  const [dialogProps, setDialogProps] = useState<DialogProps | null>(null);

  const showDialog = useCallback((props: DialogProps) => {
    const effectiveTimeout = props.timeout ?? 5000;

    setDialogProps({ ...props, timeout: effectiveTimeout });

    setTimeout(() => {
      setDialogProps(null);
      props.onClose?.();
    }, effectiveTimeout);
  }, []);

  return (
    <DialogContext.Provider value={{ showDialog }}>
      {dialogProps && <Dialog />}
      {children}
    </DialogContext.Provider>
  );
}
