import React, { Component } from "react";
import { fetchAddUserApi } from "./modules/action";
import { connect } from "react-redux";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
    };
  }

  hanldeOnchange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addUser = (e) => {
    e.preventDefault();
    this.props.fectchAddUser(this.state);
  };

  render() {
    return (
      <form className="container" onSubmit={this.addUser}>
        <h3>Thêm người dùng</h3>
        <div className="form-group">
          <span>Tài khoản</span>
          <input
            className="form-control"
            name="taiKhoan"
            onChange={this.hanldeOnchange}
          />
        </div>
        <div className="form-group">
          <span>Mật khẩu</span>
          <input
            className="form-control"
            name="matKhau"
            onChange={this.hanldeOnchange}
          />
        </div>
        <div className="form-group">
          <span>Họ tên</span>
          <input
            className="form-control"
            name="hoTen"
            onChange={this.hanldeOnchange}
          />
        </div>
        <div className="form-group">
          <span>Email</span>
          <input
            className="form-control"
            name="email"
            onChange={this.hanldeOnchange}
          />
        </div>
        <div className="form-group">
          <span>Số điện thoại</span>
          <input
            className="form-control"
            name="soDt"
            onChange={this.hanldeOnchange}
          />
        </div>
        <div className="form-group">
          <span>Mã nhóm</span>
          <input
            className="form-control"
            name="maNhom"
            onChange={this.hanldeOnchange}
          />
        </div>
        <div className="form-group">
          <span>Mã loại người dùng</span>
          <input className="form-control" name="maLoaiNguoiDung" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Thêm người dùng
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fectchAddUser: (user) => {
      dispatch(fetchAddUserApi(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddUser);
