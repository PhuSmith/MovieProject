import HomePage from "./../container/HomeTemplate/HomePage";
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
    path: "/detail/:id",
    component: DetailMovie,
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
];

export { routeHome, routesAdmin };
