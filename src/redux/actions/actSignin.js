import Axios from "axios";
import * as ActionType from "../types/SignInType";


export const signIn=(data)=>{
    return (dispatch)=>{
        Axios({
            method:"POST",
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data:data
        })
        .then(result =>{
            dispatch(actSignIn(result.data));
            localStorage.setItem('credential',JSON.stringify(result.data));
            console.log(result);
        })
        .catch(err=>{
            console.log(err.response.data);
        })
    }
}

 const actSignIn = (data) => {
    return {
      type: ActionType.FETCH_CREDENTIALS,
      payload:data
    };
  };
