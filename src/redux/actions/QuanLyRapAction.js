import * as ActionType from "../types/QuanLyRapType";
import Axios from "axios";

export const actListCinemaApi = () => {
  return (dispatch) => {
    dispatch(actListCinemaRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    })
      .then((result) => {
        dispatch(actListCinemaSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListCinemaFailed(err));
      });
  };
};

const actListCinemaRequest = () => {
  return {
    type: ActionType.LIST_CINEMA_REQUEST,
  };
};

const actListCinemaSuccess = (data) => {
  return {
    type: ActionType.LIST_CINEMA_SUCCESS,
    payload: data,
  };
};

const actListCinemaFailed = (err) => {
  return {
    type: ActionType.LIST_CINEMA_FAILED,
    payload: err,
  };
};

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
