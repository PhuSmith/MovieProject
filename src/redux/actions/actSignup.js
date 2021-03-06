import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
} from "../types/SignupType";
import Axios from "axios";

export const fetchAddUserApi = (user) => {
  return (dispatch) => {
    dispatch(actAddUserRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user,
    })
      .then((result) => {
        console.log(result.data);
        dispatch(actAddUserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actAddUserFailed(err));
      });
  };
};

const actAddUserRequest = () => {
  return {
    type: ADD_USER_REQUEST,
  };
};

const actAddUserSuccess = (data) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: data,
  };
};

const actAddUserFailed = (err) => {
  return {
    type: ADD_USER_FAILED,
    payload: err,
  };
};
