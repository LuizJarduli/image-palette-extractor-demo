import type { JSX } from 'react';
import { ProgressWidgetContainer, ProgressWidgetLabel } from './style';
import ProgressBar from '../progress-bar/ProgressBar';

interface ProgressWidgetProps {
  label: string;
  value: number;
}

export default function ProgressWidget({ label, value }: ProgressWidgetProps): JSX.Element {
  return (
    <ProgressWidgetContainer>
      <ProgressWidgetLabel>{label}</ProgressWidgetLabel>
      <ProgressBar max={100} value={value} />
    </ProgressWidgetContainer>
  );
}
