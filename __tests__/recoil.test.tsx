import { useRecoilValue, RecoilRoot, useSetRecoilState } from 'recoil';
import { favouritesState } from '@shared/state';
import { renderHook } from '@testing-library/react';
import { Game } from '@shared/types';
import { useEffect } from 'react';

// Testing the Recoil State - favouritesState
describe('Favourites State Tests', () => {
  it('should initialise with a empty array', () => {
    const { result } = renderHook(() => useRecoilValue(favouritesState), {
      wrapper: RecoilRoot,
    });

    expect(result.current).toEqual([]);
  });
  it('should return the test game object', async () => {
    const testGameObject = {
      id: '1',
      name: 'Minecraft',
      rating: 10,
      description: '',
      release_date: new Date(),
    } as Game;

    const { result } = renderHook(
      () => {
        // Set favouritesState to contain `testGameObject` so that we can test.
        const setFavouriteGame = useSetRecoilState(favouritesState);
        useEffect(() => {
          setFavouriteGame([testGameObject]);
        }, [setFavouriteGame]);

        return useRecoilValue(favouritesState);
      },
      {
        wrapper: RecoilRoot,
      }
    );
    expect(result.current).toContain(testGameObject);
  });
});
