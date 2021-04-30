import React, { useEffect } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import { actEditUser,actListUserAPI
} from "../../../redux/actions/QuanLiNguoiDungAction";
import { useDispatch } from "react-redux";


function HomeRedux ()  {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actListUserAPI());
  },[]);
  
  
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users  />
        <Modal />
      </div>
    );
  
}

export default HomeRedux;


