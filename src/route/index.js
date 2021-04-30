import HomePage from "./../container/HomeTemplate/HomePage";
import AboutPage from "./../container/HomeTemplate/AboutPage";
import HocPage from "./../container/HomeTemplate/HocPage";

import AddUser from "./../container/AdminTemplate/AddUserPage";
import DetailMovie from "./../container/HomeTemplate/DetailPage";
import Signup from "../container/HomeTemplate/Signup";
import NavbarAdmin from "../components/NavbarAdmin";
import UserControll from "../container/AdminTemplate/UserControll";
import HomeRedux from "../container/HomeTemplate/Usermanagement-redux"

const routeHome = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/about",
    component: AboutPage,
    exact: false,
  },

  {
    path: "/detail/:id",
    component: DetailMovie,
    exact: false,
  },
  {
    path: "/hoc",
    component: HocPage,
    exact: false,
  },
  {
    path: "/dangky",
    component: Signup,
    exact: false,
  },
];

const routesAdmin = [
  {
    path: "/dashboard",
    component: AddUser,
    exact: false,
  },
  {
    path: "/add-user",
    component: AddUser,
    exact: false,
  },
  {
    path: "/userList",
    component: HomeRedux,
    exact: false,
  },
  
];

export { routeHome, routesAdmin };
