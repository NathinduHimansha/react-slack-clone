import React, { createContext, useContext, useReducer } from "react";

//prepare the datalayer - context API
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValues = () => useContext(StateContext);
