import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import { connect } from "react-redux";
import {actAddUser} from "./modules/action";
class HomeRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  };
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            onClick={() => this.props.addUser()}
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users />
        <Modal />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: () => {
      
      dispatch(actAddUser(null));
    },
  }
}
export default connect(null, mapDispatchToProps)(HomeRedux);


