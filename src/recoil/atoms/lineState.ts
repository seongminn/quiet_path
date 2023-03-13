import { atom } from 'recoil';

export const lineState = atom<number>({
  key: 'lineState',
  default: 1,
});
