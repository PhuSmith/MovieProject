import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import HomePage from "./container/HomeTemplate/HomePage";
// import AboutPage from "./container/HomeTemplate/AboutPage";
// import ListMoviePage from "./container/HomeTemplate/ListMoviePage";
import PageNotFound from "./container/PageNotFound";
import { routeHome, routesAdmin } from "./route";
import HomeTemplate from "./container/HomeTemplate";
import AdminTemplate from "./container/AdminTemplate";
import AuthPage from "./container/AdminTemplate/AuthPage";
import BookingTicket from "./container/HomeTemplate/BookingTicket";
<<<<<<< HEAD
import Signup from "./container/HomeTemplate/Signup";

function App() {
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
=======
import {useEffect} from "react"
import {connect} from"react-redux"
>>>>>>> tuan


<<<<<<< HEAD
  return (
    <BrowserRouter>
      <Switch>
        {showLayoutHome(routeHome)}
        {showLayoutAdmin(routesAdmin)}
        <Route path="/bookingticket" component={BookingTicket} />
        {/* Auth */}
        <Route path="/dangky" component={Signup} />

        <Route path="/auth" component={AuthPage} />
        {/* localhost:3000 - HomePage */}
        {/* <Route exact path="/" component={HomePage} /> */}
        {/* localhost:3000/about - AboutPage */}
        {/* <Route path="/about" component={AboutPage} /> */}
        {/* localhost:3000/list-movie - ListMoviePage */}
        {/* <Route path="/list-movie" component={ListMoviePage} /> */}
        {/* PageNotFound */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
=======
import SignIn from"./container/HomeTemplate/SingIn";
import React, { Component } from "react";
import {actSignIn}  from"./redux/actions/act"

 
class App extends Component {
   

  
  render(){
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
      <BrowserRouter>
        <Switch>
          {showLayoutAdmin(routesAdmin)}
          {showLayoutHome(routeHome)}
         
          <Route path="/bookingticket" component={BookingTicket} />
          {/* Auth */}
          <Route path="/auth" component={AuthPage} />
          <Route path="/dangnhap" component={SignIn}/>
          
          
          {/* localhost:3000 - HomePage */}
          {/* <Route exact path="/" component={HomePage} /> */}
          {/* localhost:3000/about - AboutPage */}
          {/* <Route path="/about" component={AboutPage} /> */}
          {/* localhost:3000/list-movie - ListMoviePage */}
          {/* <Route path="/list-movie" component={ListMoviePage} /> */}
          {/* PageNotFound */}
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
  _getCrenditailFromLocal=()=>{
    const credentials=localStorage.getItem('credential');
    if(credentials){
      console.log(credentials);

      this.props.dispatch(
        actSignIn(JSON.parse(credentials))
      )
      console.log( this.props.dispatch(
        actSignIn(JSON.parse(credentials))
      ));
      
    }
  }
  componentDidMount(){
    this._getCrenditailFromLocal();
  }
  
  
>>>>>>> tuan
}


export default connect() (App);
