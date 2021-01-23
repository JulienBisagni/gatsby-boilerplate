import React from 'react';

import './src/styles/app.scss';

import { QueryParamProvider } from 'use-query-params';
import { Provider } from './src/contexts/Provider';

export const wrapRootElement = ({ element }) => (
  <QueryParamProvider>
    <Provider>{element}</Provider>
  </QueryParamProvider>
);
