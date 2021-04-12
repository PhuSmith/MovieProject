import { combineReducers } from "redux";
import QuanLyPhimReducer from "./QuanLyPhimReducer";
import authReducer from "../../container/AdminTemplate/AuthPage/modules/reducer";
import addUserReducer from "../../container/AdminTemplate/AddUserPage/modules/reducer";
import QuanLyRapReducer from "./QuanLyRapReducer";
import DatVeReducer from "./datveReducer";
import signInReducer from "./signInReducer";
import movieListReducer from "./movieListReducer";
const rootReducer = combineReducers({
  //key: value
  QuanLyPhimReducer,
  QuanLyRapReducer,
  authReducer,
  addUserReducer,
  DatVeReducer,
  signInReducer,
  movieListReducer,
});

export default rootReducer;
