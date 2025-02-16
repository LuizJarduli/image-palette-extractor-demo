import { createContext, useCallback, useState } from 'react';
import Dialog, { type DialogProps } from './Dialog';

export type DialogContextDataProps = DialogProps & { onClose?: VoidFunction; timeout?: number };

export interface DialogContextData {
  showDialog: (props: DialogContextDataProps) => void;
}

export const DialogContext = createContext<DialogContextData | undefined>(undefined);

export default function DialogProvider({ children }: React.PropsWithChildren) {
  const [dialogProps, setDialogProps] = useState<DialogContextDataProps | null>(null);

  const showDialog = useCallback((props: DialogContextDataProps) => {
    const effectiveTimeout = props.timeout ?? 5000;

    setDialogProps({ ...props, timeout: effectiveTimeout });

    setTimeout(() => {
      setDialogProps(null);
      props.onClose?.();
    }, effectiveTimeout);
  }, []);

  return (
    <DialogContext.Provider value={{ showDialog }}>
      {dialogProps && <Dialog {...dialogProps} />}
      {children}
    </DialogContext.Provider>
  );
}
