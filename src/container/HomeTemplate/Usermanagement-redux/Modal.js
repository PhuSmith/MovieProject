import React, { Component } from "react";
import {connect} from "react-redux";
import {actOnSave} from "./modules/action";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      type: "USER"

    };
    /**
     * Ham khoi tao chay 1 lan duy nhat
     */
    console.log("constructor");
  }
  handleOnChange = (event) => {
    console.log(event.target.name, event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value,
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
        username: nextProps.userEdit.username,
        name: nextProps.userEdit.name,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.type,
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
  render() {
    console.log("render");

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
              <h5 className="modal-title">{this.props.userEdit ? "EDIT USER" : "ADD USER"}</h5>
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
                  <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" name="type" value={this.state.type} onChange={this.handleOnChange}>
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

const mapStateToProps =(state) =>{
  return{
    userEdit:state.userReducer.userEdit,
  }
}
const mapDispatchToProps =(dispatch)=>{
  return{
    onSave:(user)=>{
      
      dispatch(actOnSave(user));
    }
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Modal);
