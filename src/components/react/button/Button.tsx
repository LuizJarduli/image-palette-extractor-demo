import type React from 'react';
import { DSButton } from './styles';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  fullWidth,
  onClick,
  size,
  variant,
}) => {
  return (
    <DSButton
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {label}
    </DSButton>
  );
};
