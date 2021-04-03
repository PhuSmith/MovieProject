import * as ActionType from "../types/DetailCinemaType";
import Axios from "axios";

export const actDetailCinemaApi = (id) => {
  return (dispatch) => {
    dispatch(actDetailCinemaRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actDetailCinemaSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDetailCinemaFailed(err));
      });
  };
};

const actDetailCinemaRequest = () => {
  return {
    type: ActionType.DETAIL_CINEMA_REQUEST,
  };
};

const actDetailCinemaSuccess = (data) => {
  return {
    type: ActionType.DETAIL_CINEMA_SUCCESS,
    payload: data,
  };
};

const actDetailCinemaFailed = (err) => {
  return {
    type: ActionType.DETAIL_CINEMA_FAILED,
    payload: err,
  };
};
