export const ADD_ELEMENT = 'ADD_ELEMENT';
export const REMOVE_ELEMENT = 'REMOVE_ELEMENT';
export const INCREMENT = 1;
export const DECREMENT = -1;

export const stateReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_ELEMENT:
      return { ...state, payload };

    case REMOVE_ELEMENT:
      return state.filter((element) => element.id !== payload.id);

    default:
      return state;
  }
};
