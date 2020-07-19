import { navigate } from '@routes/RootNavigation';

import { IAlertProps } from '@interfaces/IAlertProps';

export function alert({ title, message }: IAlertProps): void {
  navigate('Alert', { title, message });
}
