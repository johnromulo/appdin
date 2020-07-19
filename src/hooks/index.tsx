import React from 'react';

import { AuthProvider } from './auth';

const AppProvider: React.FC = ({ children }: React.Props<any>) => (
  <AuthProvider>{children}</AuthProvider>
);
export default AppProvider;
