import React, { useReducer } from 'react';
import { Context } from './Context';
import { stateReducer, ADD_ELEMENT, REMOVE_ELEMENT } from './reducers';

export const Provider = ({ children }) => {
  const db = [];

  const initialState = {};

  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addElement = (element) => {
    dispatch({ type: ADD_ELEMENT, payload: element });
  };

  const removeElement = (element) => {
    dispatch({ type: REMOVE_ELEMENT, payload: element });
  };

  return (
    <Context.Provider
      value={{
        db,
        state,
        addElement,
        removeElement,
      }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
