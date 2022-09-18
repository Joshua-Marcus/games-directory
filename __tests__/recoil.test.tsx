import { useRecoilValue, RecoilRoot } from 'recoil';
import { favouritesState } from '@shared/state';
import { renderHook } from '@testing-library/react';

// Testing the Recoil State - favouritesState
describe('Favourites State Tests', () => {
  it('should initialise with a empty []', () => {
    const { result } = renderHook(() => useRecoilValue(favouritesState), {
      wrapper: RecoilRoot,
    });

    expect(result.current).toEqual([]);
  });
});
