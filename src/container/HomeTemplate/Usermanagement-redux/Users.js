import React, { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux"


class Users extends Component {
  renderTable = () => {
    let { userList,keyword } = this.props;
    console.log(userList)
    userList = userList?.filter((item) => {
      return item.hoTen?.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    })
    
    return userList?.map((item) => {

      return <UserItem key={item.taiKhoan} user={item}/>;

    });
  };
  render() {
 
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userList: state.QuanLiNguoiDungReducer.userList,
    keyword: state.QuanLiNguoiDungReducer.keyword,
  }
}
export default connect(mapStateToProps, null)(Users);
