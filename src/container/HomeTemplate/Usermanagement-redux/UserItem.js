import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteUser,actEditUser } from "./modules/action.js";
class UserItem extends Component {

  render() {
    const { user } = this.props;
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.props.editUser(user);
            }}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => {
            console.log(user.id);
            // this.props.deleteUser(user.id)
            this.props.deleteUser(user.id);
          }}>Delete</button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //key:value
    // key- ten props ngay tai component dang su dung
    deleteUser: (id) => {

      dispatch(actDeleteUser(id));
    },
    editUser: (user) => {
      
      dispatch(actEditUser(user))
    },
  }
}




export default connect(null, mapDispatchToProps)(UserItem);
