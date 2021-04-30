import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { fetchAddUserApi2 } from "../../../redux/actions/actAddUser";
import * as local from "../../../utils/localStorage"

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
  maLoaiNguoiDung:yup.string().required("* Field is required!"),
});

class AddUser extends Component {
  handleSubmit = (values) => {
    const{
      accessToken,
    }=local.fetchFromStorage("UserAdmin")
    this.props.fectchAddUser2(values,accessToken);
  };

  render() {
    return (
      <div className="w-50 mx-auto">
        <h1 className="display-4 text-center">Thêm Người Dùng</h1>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDt: "",
            maNhom: "",
            maLoaiNguoiDung:""
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
                <label>Chức vụ</label>
                <Field
                  component="select"
                  className="form-control"
                  name="maLoaiNguoiDung"
                  onChange={formikProps.handleChange}
                >
                  <option>KhachHang</option>
                  <option>QuanTri</option>
                 
                </Field>
                <ErrorMessage name="maLoaiNguoiDung" />
              
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
    fectchAddUser2: (user,accessToken) => {
      dispatch(fetchAddUserApi2(user,accessToken));
    },
  };
};
export default connect(null, mapDispatchToProps)(AddUser);
