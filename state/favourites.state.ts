import { atom } from 'recoil';
import { Game } from '@types';

export const favouritesState = atom<Game[]>({
  key: 'favouritesState',
  default: [],
});
