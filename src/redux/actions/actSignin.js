import Axios from "axios";
import * as ActionType from "../types/SignInType";

export const signIn = (data, history) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: data,
    })
      .then((result) => {
        localStorage.setItem("credential", JSON.stringify(result.data));
        dispatch(actSignIn(result.data));
        if (localStorage.getItem("credential")) {
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data);
      });
  };
};

const actSignIn = (data) => {
  return {
    type: ActionType.FETCH_CREDENTIALS,
    payload: data,
  };
};
