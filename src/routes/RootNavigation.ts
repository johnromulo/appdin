import * as React from 'react';

export const navigationRef: any = React.createRef<any>();

export function navigate(name: any, params: any): void {
  const nvg: any = navigationRef.current?.navigate;
  if (nvg) {
    nvg(name, params);
  }
}
