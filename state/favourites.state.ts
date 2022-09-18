import { atom } from 'recoil';

export const favouritesState = atom<any[]>({
  key: 'favouritesState',
  default: [],
});
