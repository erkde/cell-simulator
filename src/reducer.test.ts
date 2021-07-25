import { initialize, reducer, toroidalIndex } from './reducer';

describe(initialize, () => {
  test('it returns a two dimensional array filled with 0', () => {
    expect(initialize({ rows: 1, columns: 1 })).toEqual([[0]]);
    expect(initialize({ rows: 1, columns: 2 })).toEqual([[0, 0]]);
    expect(initialize({ rows: 2, columns: 1 })).toEqual([[0], [0]]);
    expect(initialize({ rows: 2, columns: 2 })).toEqual([[0, 0], [0, 0]]);
  });
});

describe(toroidalIndex, () => {
  test('returns the max index when index is -1', () => {
    expect(toroidalIndex(-1, 2)).toEqual(1);
  });

  test('returns the min index when index equals length', () => {
    expect(toroidalIndex(2, 2)).toEqual(0);
  });

  test('returns the index when between 0 and length - 1', () => {
    expect(toroidalIndex(0, 2)).toEqual(0);
    expect(toroidalIndex(1, 2)).toEqual(1);
  });
});

describe(reducer, () => {
  describe('action toggle', () => {
    test('toggles dead cells to alive', () => {
      let state = [[0, 0], [0, 0]];

      state = reducer(state, { type: 'toggle', payload: { row: 0, column: 0 }});
      expect(state).toEqual([[1, 0], [0, 0]]);
  
      state = reducer(state, { type: 'toggle', payload: { row: 0, column: 1 }});
      expect(state).toEqual([[1, 1], [0, 0]]);
  
      state = reducer(state, { type: 'toggle', payload: { row: 1, column: 0 }});
      expect(state).toEqual([[1, 1], [1, 0]]);
  
      state = reducer(state, { type: 'toggle', payload: { row: 1, column: 1 }});
      expect(state).toEqual([[1, 1], [1, 1]]);  
    });

    test('toggles alive cells to dead', () => {
      let state = [[1, 1], [1, 1]];

      state = reducer(state, { type: 'toggle', payload: { row: 0, column: 0 }});
      expect(state).toEqual([[0, 1], [1, 1]]);
  
      state = reducer(state, { type: 'toggle', payload: { row: 0, column: 1 }});
      expect(state).toEqual([[0, 0], [1, 1]]);
  
      state = reducer(state, { type: 'toggle', payload: { row: 1, column: 0 }});
      expect(state).toEqual([[0, 0], [0, 1]]);
  
      state = reducer(state, { type: 'toggle', payload: { row: 1, column: 1 }});
      expect(state).toEqual([[0, 0], [0, 0]]);  
    });
  });


  describe('action reset', () => {
    test('sets all cells to 0', () => {
      let state = [[1, 1], [1, 1]];
      expect(reducer(state, { type: 'reset'})).toEqual([[0, 0], [0, 0]]);
    });
  });

  describe('action next', () => {
    test('keeps a still life, still', () => {
      let firstState = [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ];

      let state = reducer(firstState, { type: 'next' });
      expect(state).toEqual(firstState);
    });

    test('changes an oscilator between two shapes', () => {
      let firstState = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      let secondState = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      let state = reducer(firstState, { type: 'next' });
      expect(state).toEqual(secondState);

      state = reducer(state, { type: 'next' });
      expect(state).toEqual(firstState);

      state = reducer(state, { type: 'next' });
      expect(state).toEqual(secondState);

      state = reducer(state, { type: 'next' });
      expect(state).toEqual(firstState);
    });

    test('moves a glider across the board', () => {
      let firstState = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];

      let secondState = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];

      let thirdState = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];

      let state = reducer(firstState, { type: 'next' });
      expect(state).toEqual(secondState);

      state = reducer(state, { type: 'next' });
      expect(state).toEqual(thirdState);
    });
  });
});
