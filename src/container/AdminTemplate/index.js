import React from "react";
import { Route } from "react-router-dom";
import NavbarAdmin from "./../../components/NavbarAdmin";
import { Redirect } from "react-router-dom";

function AdminLayout(props) {
  return (
    <div>
      <NavbarAdmin />
      {props.children}
    </div>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        }

        //Redirect về trang Auth
        return <Redirect to="/auth" />;
      }}
    />
  );
}
