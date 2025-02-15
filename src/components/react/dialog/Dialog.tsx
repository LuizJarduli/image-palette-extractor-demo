import { useEffect, useRef, type JSX } from 'react';
import { DialogContent, DialogHeader, DialogWrapper } from './style';

export default function Dialog(): JSX.Element {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  return (
    <DialogWrapper ref={dialogRef}>
      <DialogHeader className="success">
        <h3>My dialog</h3>
      </DialogHeader>
      <DialogContent>
        <p>My Dialog content</p>
      </DialogContent>
    </DialogWrapper>
  );
}
