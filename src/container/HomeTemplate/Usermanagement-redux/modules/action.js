import * as ActionType from "./constant.js"

const actDeleteUser = (id) => {
    const action = {
        type: ActionType.DELETE_USER,
        payload: id,
    };
    return action;
}

const actEditUser = (user) => {
    return {
        type: ActionType.EDIT_USER,
        payload: user,
    };
}

const actOnSave = (user) => {
    return {
        type: ActionType.ON_SAVE,
        payload: user
    };
}

const actSearch = (keyword) => {
    return {
        type: ActionType.GET_KEYWORD,
        payload: keyword
    }
}

const actAddUser=()=>{
    return{
        type: ActionType.EDIT_USER,
        payload: "null",
    }
}
export { actDeleteUser, actEditUser, actOnSave ,actSearch,actAddUser};