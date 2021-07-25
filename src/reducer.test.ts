import { initialize, reducer } from './reducer';

describe(initialize, () => {
  test('it returns a two dimensional array filled with 0', () => {
    expect(initialize({ rows: 1, columns: 1 })).toEqual([[0]]);
    expect(initialize({ rows: 1, columns: 2 })).toEqual([[0, 0]]);
    expect(initialize({ rows: 2, columns: 1 })).toEqual([[0], [0]]);
    expect(initialize({ rows: 2, columns: 2 })).toEqual([[0, 0], [0, 0]]);
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
});
