import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./container/PageNotFound";
import { routeHome, routesAdmin } from "./route";
import HomeTemplate from "./container/HomeTemplate";
import AdminTemplate from "./container/AdminTemplate";
import AuthPage from "./container/AdminTemplate/AuthPage";
import BookingTicket from "./container/HomeTemplate/BookingTicket";
import { connect } from "react-redux";
import SignIn from "./container/HomeTemplate/SingIn";
import React, { Component, Fragment } from "react";
import { actSignIn } from "./redux/actions/act";
import TrailerPopup from "./components/TrailerPopup";
import * as sharedActions from "./redux/actions/sharedActions";
class App extends Component {
  render() {
    const showLayoutHome = (route) => {
      if (route && route.length > 0) {
        return route.map((item, index) => {
          return (
            <HomeTemplate
              key={index}
              exact={item.exact}
              path={item.path}
              Component={item.component}
            />
          );
        });
      }
    };

    const showLayoutAdmin = (route) => {
      if (route && route.length > 0) {
        return route.map((item, index) => {
          return (
            <AdminTemplate
              key={index}
              exact={item.exact}
              path={item.path}
              Component={item.component}
            />
          );
        });
      }
    };

    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            {showLayoutAdmin(routesAdmin)}
            {showLayoutHome(routeHome)}
            <Route path="/chitietPhongVe/:id" component={BookingTicket} />
            <Route path="/auth" component={AuthPage} />
            <Route path="/dangnhap" component={SignIn} />
            <Route path="" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
        <TrailerPopup
          isOpen={this.props.isOpenVideoTrailer}
          onClose={() => {
            this.props.CloseVideoTrailer(false);
          }}
          videoId={this.props.videoTrailer}
          // onClose={this.CloseVideoTrailer}
        />
      </Fragment>
    );
  }
  // CloseVideoTrailer = () => {
  //   this.props.dispatch(sharedActions.actIsOpenVideoTrailer(false));
  // };
  componentDidMount() {
    this.props.getCrenditailFromLocal();
  }
}

const mapStateToProps = (state) => {
  return {
    videoTrailer: state.sharedReducer.videoTrailer,
    isOpenVideoTrailer: state.sharedReducer.isOpenVideoTrailer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    CloseVideoTrailer: (data) => {
      dispatch(sharedActions.actIsOpenVideoTrailer(data));
    },
    getCrenditailFromLocal: () => {
      const credentials = localStorage.getItem("credential");
      if (credentials) {
        dispatch(actSignIn(JSON.parse(credentials)));
      }
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
