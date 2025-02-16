import React, { createContext, useContext, useState } from 'react';
import { LoadingState } from './LoadingState';
import { ColorPalette } from 'image-palette-extractor';
import { AcceptedExtensions } from './AcceptedExtensions';
import { useReleaseUpload } from '../release-upload/ReleaseUploadHook';
import { useDialog } from '../../dialog/DialogHook';

type LoadingState = [string, number] | null;
type ColorPaletteResult = string[] | null;

interface UploadContextType {
  loadingState: LoadingState;
  setLoadingState: (state: LoadingState | null) => void;
  extractedColors: ColorPaletteResult;
  setExtractedColors: (colors: ColorPaletteResult | null) => void;
  isDragOver: boolean;
  imageSrc: string;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>, isDraggingOver: boolean) => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  handleOnDrop: (event: React.DragEvent<HTMLDivElement>) => Promise<void>;
}

const UploadContext = createContext<UploadContextType | undefined>(undefined);

export const UploadProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loadingState, setLoadingState] = useState<LoadingState | null>(null);
  const [extractedColors, setExtractedColors] = useState<ColorPaletteResult | null>(null);
  const [isDragOver, setDragOver] = useState<boolean>(false);
  const { showAlert, hideAlert } = useReleaseUpload();
  const [imageSrc, setImageSrc] = useState<string>('');
  const { showDialog } = useDialog();

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>, isDraggingOver: boolean) => {
    const actionHandler = isDraggingOver ? showAlert : hideAlert;
    event.stopPropagation();
    event.preventDefault();
    setDragOver(isDraggingOver);
    actionHandler();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    setLoadingState(LoadingState.PROCESSING_FILE);

    if (files && files.length > 0) {
      const file = files[0];
      const colors = await extractImagePalette(file);
      setExtractedColors(colors);
      setLoadingState(['Done', 100]);
    }
  };

  const handleOnDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    handleDragOver(event, false);
    event.preventDefault();
    const { files } = event.dataTransfer;
    const file = files.item(0);
    const { name } = file || {};

    if (name && !isValidFileExtension(name)) {
      showDialog({ title: 'Warning', message: 'Format not supported', variant: 'warning' });
      return console.error('[DEBUG] Format not supported');
    }

    setLoadingState(LoadingState.PROCESSING_FILE);

    if (file) {
      const colors = await extractImagePalette(file);
      setExtractedColors(colors);
      setLoadingState(LoadingState.DONE);
    }
  };

  const extractImagePalette = async (file: File): Promise<ColorPaletteResult> => {
    setLoadingState(LoadingState.EXTRACTING_PALETTE);

    try {
      const base64 = await loadFileBase64(file);

      if (!base64) return null;

      setImageSrc(base64);
      const result = await ColorPalette.getColors(base64, 6, 51);
      return result;
    } catch (error) {
      showDialog({
        title: 'Error',
        message:
          'An unknown error occurred while trying to fetch the color palette. Try again later',
        variant: 'error',
      });
      console.error(error);
      return null;
    }
  };

  const loadFileBase64 = async (file: File): Promise<string | null> => {
    const reader = new FileReader();

    return new Promise<string | null>((resolve, reject) => {
      reader.onerror = () => reject();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
    });
  };

  const isValidFileExtension = (fileName: string): boolean => {
    const fileExtension = fileName.split('.')?.at(-1) ?? '';
    return fileExtension in AcceptedExtensions;
  };

  return (
    <UploadContext.Provider
      value={{
        loadingState,
        setLoadingState,
        extractedColors,
        setExtractedColors,
        isDragOver,
        handleDragOver,
        handleFileChange,
        handleOnDrop,
        imageSrc,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};

export const useUploadContext = () => {
  const context = useContext(UploadContext);
  if (!context) {
    throw new Error('useUploadContext must be used within an UploadProvider');
  }
  return context;
};
