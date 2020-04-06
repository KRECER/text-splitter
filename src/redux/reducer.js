const initialState = {
  fullText: '',
  isFilledText: false,
  parts: {
    column1: '',
    column2: '',
    column3: '',
  },
};

const ActionType = {
  CHANGE_FULL_TEXT: 'CHANGE_FULL_TEXT',
  CHANGE_COLUMN_TEXT: 'CHANGE_COLUMN_TEXT',
  SPLIT_TEXT: 'SPLIT_TEXT',
};

const ActionCreator = {
  changeFullText: (text) => ({
    type: ActionType.CHANGE_FULL_TEXT,
    payload: text,
  }),

  changeColumnText: (numCol, text) => {
    return { type: ActionType.CHANGE_COLUMN_TEXT, payload: { numCol, text } };
  },

  splitText: (count, text) => {
    const words = text.split(' ');
    const len = Math.round(words.length / count);
    const obj = {};

    switch (count) {
      case 1:
        obj.column1 = text;
        break;
      case 2:
        obj.column1 = words.slice(0, len).join(' ');
        obj.column2 = words.slice(len).join(' ');
        break;
      case 3:
        obj.column1 = words.slice(0, len).join(' ');
        obj.column2 = words.slice(len, len + len).join(' ');
        obj.column3 = words.slice(len + len).join(' ');
        break;
    }

    return { type: ActionType.SPLIT_TEXT, payload: obj };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FULL_TEXT:
      return {
        ...state,
        fullText: action.payload,
        isFilledText: true,
        parts: { ...state.parts, column1: action.payload },
      };

    case ActionType.CHANGE_COLUMN_TEXT:
      return {
        ...state,
        parts: {
          ...state.parts,
          [`column${action.payload.numCol}`]: action.payload.text,
        },
      };

    case ActionType.SPLIT_TEXT:
      return { ...state, parts: action.payload };

    default:
      return state;
  }
};

export { ActionCreator, reducer };
