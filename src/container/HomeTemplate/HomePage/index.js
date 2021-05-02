import React, { Component, Fragment } from "react";
import Carousel from "../../../components/Carousel";
import ListMovie from "../../../components/ListMovie";
import ListTheaters from "../../../components/ListTheaters";
import AppMobile from "../../../components/AppMobile";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Carousel />
        <div style={{ maxWidth: "940px", margin: "0 auto" }}>
          <ListMovie />
          <ListTheaters />
        </div>
        <div className="container-fluid">
          <AppMobile />
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
