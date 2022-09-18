import { atom } from 'recoil';
import { Game } from '@shared/types';

export const favouritesState = atom<Game[]>({
  key: 'favouritesState',
  default: [],
});
