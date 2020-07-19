import { string } from 'yup';

interface AlertButton {
  text: string;
  onPress?: () => void | Promise<void>;
  styleButton?: 'info' | 'success' | 'error';
}

export interface IAlertProps {
  typeAlert: 'info' | 'success' | 'error';
  title: string;
  message: string;
  buttons: AlertButton[];
}
