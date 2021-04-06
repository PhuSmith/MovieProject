import * as ActionType from "../types/SignInType";

let initialState={
    credential:null
}

const signInReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionType.FETCH_CREDENTIALS:
            state.credential=action.payload;
            return {...state};

        default:return state;
    };
    

};

export default signInReducer;