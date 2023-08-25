'use client';

import { store } from '../../store/store';
import { Provider } from 'react-redux';

export default function CustomProvider({ children }: PureFunctionProp) {
  return <Provider store={store}>{children}</Provider>;
}
