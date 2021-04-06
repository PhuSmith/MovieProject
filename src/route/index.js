import HomePage from "./../container/HomeTemplate/HomePage";
import AboutPage from "./../container/HomeTemplate/AboutPage";
import HocPage from "./../container/HomeTemplate/HocPage";
import Dashboard from "./../container/AdminTemplate/Dashboard";
import AddUser from "./../container/AdminTemplate/AddUserPage";
import DetailMovie from "./../container/HomeTemplate/DetailPage";
import Signup from "../container/HomeTemplate/Signup";

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
<<<<<<< HEAD
  // {
  //   path: "/dangky",
  //   component: Signup,
  //   exact: false,
  // },
=======
  
>>>>>>> tuan
];

const routesAdmin = [
  {
    path: "/dashboard",
    component: Dashboard,
    exact: false,
  },
  {
    path: "/add-user",
    component: AddUser,
    exact: false,
  },
];

export { routeHome, routesAdmin };
