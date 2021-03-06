import React from "react";
import { Route } from "react-router-dom";
import Footer from "../../components/Footer";
import NavbarHome from "./../../components/NavbarHome";

function HomeLayout(props) {
  return (
    <div>
      <NavbarHome />

      {props.children}

      <Footer />
    </div>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
