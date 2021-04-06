import { combineReducers } from "redux";
import listMoviceReducer from "./listMoviceReducer";
import detailMovieReducer from "../../container/HomeTemplate/DetailPage/modules/reducer";
import authReducer from "../../container/AdminTemplate/AuthPage/modules/reducer";
import addUserReducer from "../../container/AdminTemplate/AddUserPage/modules/reducer";
import listCinemaReducer from "./listCinemaReducer";
import detailCinemaReducer from "./detailCinemaReducer";
import DatVeReducer from "./datveReducer";
import signInReducer from "./signInReducer";
const rootReducer = combineReducers({
  //key: value
  listMoviceReducer,
  listCinemaReducer,
  detailMovieReducer,
  detailCinemaReducer,
  authReducer,
  addUserReducer,
  DatVeReducer,
  signInReducer
});

export default rootReducer;
