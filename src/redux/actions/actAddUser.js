import {
    ADD_USER_REQUEST2,
    ADD_USER_SUCCESS2,
    ADD_USER_FAILED2,
  } from "../types/AddUserType";
  import Axios from "axios";
  
  export const fetchAddUserApi2 = (user,token) => {
    return (dispatch) => {
      dispatch(actAddUserRequest());
      Axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        method: "POST",
        data: user,
        headers: {
            Authorization: `Bearer ${token}`,
          },
      })
        .then((result) => {
          
          dispatch(actAddUserSuccess(result.data));
        })
        .catch((err) => {
            console.log(err.response.data);
          dispatch(actAddUserFailed(err));
        });
    };
  };
  
  const actAddUserRequest = () => {
    return {
      type: ADD_USER_REQUEST2,
    };
  };
  
  const actAddUserSuccess = (data) => {
    return {
      type: ADD_USER_SUCCESS2,
      payload: data,
    };
  };
  
  const actAddUserFailed = (err) => {
    return {
      type: ADD_USER_FAILED2,
      payload: err,
    };
  };
  