import { reducer } from './reducer';

it('Should return initial state by default', () => {
  expect(reducer(undefined, {})).toEqual({
    fullText: '',
    isFilledText: false,
    parts: {
      column1: '',
      column2: '',
      column3: '',
    },
  });
});
