import { combineReducers } from "redux";
import QuanLyPhimReducer from "./QuanLyPhimReducer";
import authReducer from "../../container/AdminTemplate/AuthPage/modules/reducer";
import addUserReducer from "../../container/AdminTemplate/AddUserPage/modules/reducer";
import QuanLyRapReducer from "./QuanLyRapReducer";
import sharedReducer from "./sharedReducer";
import signInReducer from "./signInReducer";
import movieListReducer from "./movieListReducer";
import QuanLiNguoiDungReducer from "./QuanLiNguoiDungReducer"
const rootReducer = combineReducers({
  //key: value
  QuanLyPhimReducer,
  QuanLyRapReducer,
  authReducer,
  addUserReducer,
  signInReducer,
  movieListReducer,
<<<<<<< HEAD
  sharedReducer,
=======
  QuanLiNguoiDungReducer,
>>>>>>> 2d965b411f8dd92848e037e65ca02925dfb09e0a
});

export default rootReducer;
