import { atom } from 'recoil';

export const subwayListState = atom<boolean>({
  key: 'SubwayListClicked',
  default: false,
});
