import React, { Component } from "react";
import { Form, Formik, Field } from "formik";
import { connect } from "react-redux";
import { signIn } from "../../../redux/actions/actSignin";

class SignIn extends Component {
  // goToHomePage=()=>{
  //   if(localStorage.getItem('credential')){
  //     this.props.history.replace('/')
  //   }
  
  render() {
    
    return (
      <div className="w-50 mx-auto">
        <h1 className="display-4 text-center">Đăng nhập</h1>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
          }}
          onSubmit={(values) => {
            // }else{

            this.props.fecthSignIn(values,this.props.history);
            
             console.log(values); 
         

          }}
          render={(formikProps) => (
            <Form>
              <div classname="form=group">
                <label>Tài khoản</label>
                <Field
                  type="text"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                  className="form-control"
                />
              </div>
              <div classname="form=group">
                <label>Mật khẩu</label>
                <Field
                  type="password"
                  name="matKhau"
                  onChange={formikProps.handleChange}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-success">
                Đăng nhập
              </button>
            </Form>
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fecthSignIn: (data,history) => {
      dispatch(signIn(data,history));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    credential: state.signInReducer.credential,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
