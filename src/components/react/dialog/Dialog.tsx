import { useEffect, useRef, type JSX } from 'react';
import { DialogContent, DialogHeader, DialogWrapper } from './style';

export interface DialogProps {
  title: string;
  message: string;
  variant: 'success' | 'error' | 'warning' | 'info';
}

export default function Dialog({ title, message, variant }: DialogProps): JSX.Element {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  return (
    <DialogWrapper ref={dialogRef}>
      <DialogHeader className={variant}>
        <h3>{title}</h3>
      </DialogHeader>
      <DialogContent>
        <p>{message}</p>
      </DialogContent>
    </DialogWrapper>
  );
}
