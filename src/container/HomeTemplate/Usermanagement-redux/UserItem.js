import React, { useEffect } from "react";
import { actDeleteUser,actEditUser } from "../../../redux/actions/QuanLiNguoiDungAction";
import * as local from "../../../utils/localStorage"
import { useDispatch, useSelector } from "react-redux";
import { actListUserAPI } from "../../../redux/actions/QuanLiNguoiDungAction";

function UserItem (props){

  const dispatch = useDispatch();

 
  useEffect((taiKhoan,accessToken) => {
    dispatch(actListUserAPI());
     actDeleteUser(taiKhoan,accessToken);
  },[]);
 
    const { user } = props;
    // console.log(user)
    return (
      <tr>
        <td>{user.taiKhoan}</td>
        <td>{user.hoTen}</td>
        <td>{user.email}</td>
        <td>{user.soDt}</td>
        <td>{user.maLoaiNguoiDung}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              props.editUser(user);
              console.log(props.editUser(user));
            }}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => {
             const{
              accessToken,
            }=local.fetchFromStorage("UserAdmin")
            
            actDeleteUser(user.taiKhoan,accessToken);
          }}>Delete</button>
        </td>
      </tr>
    )
}
export default UserItem;
