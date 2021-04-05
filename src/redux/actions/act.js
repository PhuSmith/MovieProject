import * as ActionType from "./../types/SignInType"
export const actSignIn = (data) => {
    return {
      type: ActionType.FETCH_CREDENTIALS,
      payload:data
    };
  };