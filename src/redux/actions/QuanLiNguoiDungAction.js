import * as ActionType from "../types/QuanLiNguoiDungType"
import Axios from "axios";
import {
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILED,
  } from "../types/DeleteUser";


const actDeleteUser = (taiKhoan,token) => {
    return (dispatch) => {
        dispatch(actDeleteUserRequest());
        Axios({
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
          method: "DELETE",
          data: taiKhoan,
          headers: {
              Authorization: `Bearer ${token}`,
            },
        })
          .then((result) => {
            console.log(result.data);

            dispatch(actDeleteUserSuccess(result));
          })
          .catch((err) => {
            console.log(err.reponse);
            dispatch(actDeleteUserFailed(err));
          });
      };
}
const actDeleteUserRequest = () => {
    return {
      type: DELETE_USER_REQUEST,
    };
  };
  
  const actDeleteUserSuccess = (data) => {
    return {
      type: DELETE_USER_SUCCESS,
      payload: data,
    };
  };
  
  const actDeleteUserFailed = (err) => {
    return {
      type: DELETE_USER_FAILED,
      payload: err,
    };
  };

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

const actAddUser = () => {
    return {
        type: ActionType.EDIT_USER,
        payload: "null",
    }
}

const actListUser=(data)=>{
    return {
        type:ActionType.LIST_USER_SUCCESS,
        payload:data
    }

}


export const actListUserAPI = () => {
    return (dispatch) =>{
        Axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02',
            method: 'GET'
        })
        .then((result) => {
            
    
           dispatch(actListUser(result.data))
    
        })
        .catch((error) => {
           
            console.log(error);
        })
    } 

}


export { actDeleteUser, actEditUser, actOnSave, actSearch, actAddUser,actListUser };