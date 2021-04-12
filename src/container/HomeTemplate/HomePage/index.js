import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import Carousel from "../../../components/Carousel";
import FilterBox from "../../../components/FilterBox";
import ListMovie from "../../../components/ListMovie";
import ListCinema from "../../../components/ListCinema";
import AppMobile from "../../../components/AppMobile";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <FilterBox />
        <ListMovie />
        <ListCinema />
        <AppMobile />
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withStyles(styles)(HomePage));
