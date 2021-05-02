import React, { Component } from "react";
import { connect } from "react-redux";
import { actOnSave } from "../../../redux/actions/QuanLiNguoiDungAction";
class Modal extends Component {
  constructor(props) {
    super(props);
    const{userList,userEdit}=this.props
    this.state = {
      id: "",
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      type: "USER"

    };
   
  }

  
  handleOnChange = (event) => {
    console.log(event.target.name, event.target.value);
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value,
      [event.target.name]:event.target.value,
     
      
      
    });

  };

  handleSubmit = (event) => {
    //Chan load lai trang
    event.preventDefault();
    this.props.onSave(this.state);

    //Dong lai modal
    console.log(this.refs);
    this.refs.cancel.click();

  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    //componentWillReceiveProps chay khi nhan 1 props thay doi tu component cha truyen vao

    if (nextProps && nextProps.userEdit) {
      //Truong hop edit user
      this.setState({
        id: nextProps.userEdit.id,
        username: nextProps.userEdit.hoTen,
        name: nextProps.userEdit.taiKhoan,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.soDt,
        type: nextProps.userEdit.maLoaiNguoiDung,
      });

    }
    else {
      //Truong hop add user
      this.setState({
        id: "",
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        type: "USER"
      })
    }
    console.log("componentWillReceiveProps", nextProps);
  }
  static getDerivedStateFromProps(props,state){
   if(props.userList.hoTen!== state.userEdit?.hoTen){
    return {...state,userList:props.userEdit}
   }
   return state;
    
  }
  render() {
    const {userList,userEdit}=this.props

    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{userEdit ? "EDIT USER" : "ADD USER"}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref="cancel"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="hoTen" value={userEdit?.hoTen} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="taiKhoan" value={userEdit?.taiKhoan} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" value={userEdit?.email} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="soDt" value={userEdit?.soDt} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" name="maLoaiNguoiDung" value={userEdit?.maLoaiNguoiDung} onChange={this.handleOnChange}>
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userEdit: state.QuanLiNguoiDungReducer.userEdit,
    userList:state.QuanLiNguoiDungReducer.userList,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (user) => {

      dispatch(actOnSave(user));
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
