import { atom } from 'recoil';

export const lineState = atom<number>({
  key: 'LineState',
  default: 1,
});
