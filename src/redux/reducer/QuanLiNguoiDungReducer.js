import * as ActionType from "../types/QuanLiNguoiDungType"
import * as ActionType1 from "../types/DeleteUser"
let initialState = {
    userList: [
    ],
    userEdit: null,
    keyword: ""
};
const QuanLiNguoiDungReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case ActionType.LIST_USER_SUCCESS:
            state.userList=action.payload
            return { ...state };

        // case ActionType1.DELETE_USER_SUCCESS:{
        //     let userList = [...state.userList];
        //     console.log(action.payload)
        //     const index = userList.findIndex((user) => {
        //         return user.taiKhoan === action.payload
        //     })
        //     console.log(index)
        //     if (index !== -1) {
        //         userList.splice(index, 1);
        //       state.userList = userList;   
        //     }
           
        //     return { ...state };
        // }
        case ActionType.ON_SAVE: {
            if (action.payload.id) {
                const index = state.userList.findIndex((item) => {
                    return item.id === action.payload.id;
                })
                if (index !== -1) {
                    let userList = [...state.userList];
                    userList[index] = action.payload
                    state.userList = userList;
                }
            } else {
                console.log(action);
                let userList = [...state.userList];
                const userNew = { ...action.payload, id: Math.random() }
                userList = [...state.userList, userNew];
                state.userList = userList;
            }
            return { ...state };
        }
        case ActionType.EDIT_USER: {
            console.log(action);
            state.userEdit = action.payload;
            return { ...state };

        }
        case ActionType.GET_KEYWORD:{

            console.log(action);
            state.keyword=action.payload;
            return {...state};
        }


        default:
            return { ...state };



    }


}

export default QuanLiNguoiDungReducer;