import React, { createContext, useReducer } from "react";
export const AppContext = createContext();
const initialState = {
  user: {},
  project: {},
  document: {},
  plan: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "SET_PROJECT":
      return {
        ...state,
        project: action.payload,
      };

    case "SET_DOCUMENT":
      return {
        ...state,
        document: action.payload,
      };

    case "SET_PLAN":
      return {
        ...state,
        plan: action.payload,
      };
    default:
      throw new Error();
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setUserData = (user) => {
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };

  const setProject = (data) => {
    dispatch({
      type: "SET_PROJECT",
      payload: data,
    });
  };
  const setDocument = (data) => {
    dispatch({
      type: "SET_DOCUMENT",
      payload: data,
    });
  };

  const setPlan = (data) => {
    dispatch({
      type: "SET_PLAN",
      payload: data,
    });
  };

  const value = {
    state,
    dispatch,
    setUserData,
    setProject,
    setDocument,
    setPlan,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
