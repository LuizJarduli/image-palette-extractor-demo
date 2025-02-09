import React, { createContext, useState } from 'react';

export interface ReleaseUploadContextData {
  show: boolean;
  showAlert: () => void;
  hideAlert: () => void;
}

export const ReleaseUploadContext = createContext<ReleaseUploadContextData | undefined>(undefined);

export default function ReleaseUploadProvider({ children }: React.PropsWithChildren) {
  const [show, setShow] = useState<boolean>(false);

  const showAlert = () => setShow(true);

  const hideAlert = () => setShow(false);

  return (
    <ReleaseUploadContext.Provider value={{ show, hideAlert, showAlert }}>
      {children}
    </ReleaseUploadContext.Provider>
  );
}
