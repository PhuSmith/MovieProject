import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { connect } from "react-redux";
import { fetchAddUserApi } from "../../../redux/actions/actSignup";

const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("* Field is required!"),
  matKhau: yup.string().required("* Field is required!"),
  hoTen: yup.string().required("* Field is required!"),
  email: yup
    .string()
    .required("* Field is required!")
    .email("*Email is invalid!"),
  soDt: yup
    .string()
    .required("* Field is required!")
    .matches(/^[0-9]+$/),
  maNhom: yup.string().required("* Field is required!"),
});

class Signup extends Component {
  handleSubmit = (values) => {
    this.props.fectchAddUser(values);
  };

  render() {
    return (
      <div className="w-50 mx-auto">
        <h1 className="display-4 text-center">Đăng ký</h1>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDt: "",
            maNhom: "GP10",
          }}
          validationSchema={signupUserSchema}
          onSubmit={this.handleSubmit}
          render={(formikProps) => (
            <Form>
              <div className="form-group">
                <label>Tài khoản</label>
                <Field
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="taiKhoan" />
              </div>
              <div className="form-group">
                <label>Mật khẩu</label>
                <Field
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="matKhau" />
              </div>
              <div className="form-group">
                <label>Họ tên</label>
                <Field
                  type="text"
                  className="form-control"
                  name="hoTen"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="hoTen" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <Field
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="email" />
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <Field
                  type="text"
                  className="form-control"
                  name="soDt"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="soDt">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Mã nhóm</label>
                <Field
                  component="select"
                  className="form-control"
                  name="maNhom"
                  onChange={formikProps.handleChange}
                >
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                  <option>GP04</option>
                  <option>GP05</option>
                  <option>GP06</option>
                  <option>GP07</option>
                  <option>GP08</option>
                  <option>GP09</option>
                  <option>GP10</option>
                </Field>
                <ErrorMessage name="maNhom" />
              </div>
              <div className="text-center">
                <button className="btn btn-success">Submit</button>
              </div>
            </Form>
          )}
        />
      </div>
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
export default connect(null, mapDispatchToProps)(Signup);
