import React from 'react';
import { QueryClientProvider } from 'react-query';
import GlobalStyles from '../src/styles/GlobalStyles';
import getClient from '../src/config/queryClient';

const queryClient = getClient();

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Story />
    </QueryClientProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
