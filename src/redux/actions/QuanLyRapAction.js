import * as ActionType from "../types/QuanLyRapType";
import Axios from "axios";

export const actListTheatersApi = () => {
  return (dispatch) => {
    dispatch(actListTheatersRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    })
      .then((result) => {
        dispatch(actListTheatersSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListTheatersFailed(err));
      });
  };
};

const actListTheatersRequest = () => {
  return {
    type: ActionType.LIST_THEATERS_REQUEST,
  };
};

const actListTheatersSuccess = (data) => {
  return {
    type: ActionType.LIST_THEATERS_SUCCESS,
    payload: data,
  };
};

const actListTheatersFailed = (err) => {
  return {
    type: ActionType.LIST_THEATERS_FAILED,
    payload: err,
  };
};

export const actDetailTheaterApi = (id) => {
  return (dispatch) => {
    dispatch(actDetailTheaterRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP02`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actDetailTheaterSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDetailTheaterFailed(err));
      });
  };
};

const actDetailTheaterRequest = () => {
  return {
    type: ActionType.DETAIL_THEATER_REQUEST,
  };
};

const actDetailTheaterSuccess = (data) => {
  return {
    type: ActionType.DETAIL_THEATER_SUCCESS,
    payload: data,
  };
};

const actDetailTheaterFailed = (err) => {
  return {
    type: ActionType.DETAIL_THEATER_FAILED,
    payload: err,
  };
};

export const actMaHeThongRap = (data) => {
  return {
    type: ActionType.MA_HE_THONG_RAP,
    payload: data,
  };
};
