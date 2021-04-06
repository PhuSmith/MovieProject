import * as ActionType from "./constant.js"

let initialState = {
    userList: [
        {
            id: 1,
            name: "Dinh Phuc Nguyen",
            username: "dpnguyen",
            email: "dpnguyen@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP",
        },
        {
            id: 2,
            name: "hao",
            username: "nguyendp",
            email: "nguyendp@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP",
        },
    ],
    userEdit: null,
    keyword: ""
};
const userReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.DELETE_USER:
            let userList = [...state.userList];
            const index = userList.findIndex((user) => {
                return user.id === action.payload
            })
            console.log(index)
            if (index !== -1) {
                userList.splice(index, 1);
                state.userList = userList;
            }
            return { ...state };
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

export default userReducer;