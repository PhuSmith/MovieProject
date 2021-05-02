import React, { useEffect } from "react";
import { Form, Formik, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn } from "../../../redux/actions/actSignin";
import bg from "../../../assets/images/backapp.jpg";
import "./styles.css";

export default function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const credential = useSelector((state) => state.signInReducer);

  return (
    <div>
      <img className="img-fluid" src={bg} alt={bg} />
      <div className="mx-auto signin">
        <h1 className="display-5 text-center">Đăng nhập</h1>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
          }}
          onSubmit={(values) => {
            dispatch(signIn(values, history));
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
    </div>
  );
}
