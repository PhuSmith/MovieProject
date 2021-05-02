import {
    ADD_USER_REQUEST2,
    ADD_USER_SUCCESS2,
    ADD_USER_FAILED2,
  } from "../types/AddUserType";
  
  let initialState = {
    loading: false,
    data: null,
    err: null,
  };
  
  const addUserReducer2 = (state = initialState, action) => {
    switch (action.type) {
      case ADD_USER_REQUEST2:
        state.loading = true;
        state.data = null;
        state.err = null;
        return { ...state };
  
      case ADD_USER_SUCCESS2:
        state.loading = false;
        state.data = action.payload;
        state.err = null;
        return { ...state };
  
      case ADD_USER_FAILED2:
        state.loading = false;
        state.data = null;
        state.err = action.payload;
        return { ...state };
      default:
        return { ...state };
    }
  };
  
  export default addUserReducer2;
  