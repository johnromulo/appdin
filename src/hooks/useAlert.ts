import { navigate } from '@routes/RootNavigation';

import { IAlertProps } from '@interfaces/IAlertProps';

export function alert(data: IAlertProps): void {
  navigate('Alert', { ...data });
}
