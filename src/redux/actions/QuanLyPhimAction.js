import * as ActionType from "../types/QuanLyPhimType";
import Axios from "axios";
import Swal from "sweetalert2";

export const actListMovieApi = () => {
  return (dispatch) => {
    dispatch(actListMovieRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
      method: "GET",
    })
      .then((result) => {
        dispatch(actListMovieSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListMovieFailed(err));
      });
  };
};

const actListMovieRequest = () => {
  return {
    type: ActionType.LIST_MOVIE_REQUEST,
  };
};

const actListMovieSuccess = (data) => {
  return {
    type: ActionType.LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListMovieFailed = (err) => {
  return {
    type: ActionType.LIST_MOVIE_FAILED,
    payload: err,
  };
};

export const layThongTinPhongVeApiAction = (maLichChieu) => {
  return (dispatch) => {
    dispatch(layThongTinPhongVeRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}
        `,
      method: "GET",
    })
      .then((result) => {
        dispatch(layThongTinPhongVeSuccess(result.data));
      })
      .catch((err) => {
        dispatch(layThongTinPhongVeFailed(err));
      });
  };
};

const layThongTinPhongVeRequest = () => {
  return {
    type: ActionType.LAY_THONG_TIN_PHONG_VE_REQUEST,
  };
};

const layThongTinPhongVeSuccess = (data) => {
  return {
    type: ActionType.LAY_THONG_TIN_PHONG_VE_SUCCESS,
    payload: data,
  };
};

const layThongTinPhongVeFailed = (err) => {
  return {
    type: ActionType.LAY_THONG_TIN_PHONG_VE_FAILED,
    payload: err,
  };
};

export const actDetailMovieApi = (id) => {
  return (dispatch) => {
    dispatch(actDetailMovieRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actDetailMovieSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDetailMovieFailed(err));
      });
  };
};

const actDetailMovieRequest = () => {
  return {
    type: ActionType.DETAIL_MOVIE_REQUEST,
  };
};

const actDetailMovieSuccess = (data) => {
  return {
    type: ActionType.DETAIL_MOVIE_SUCCESS,
    payload: data,
  };
};

const actDetailMovieFailed = (err) => {
  return {
    type: ActionType.DETAIL_MOVIE_FAILED,
    payload: err,
  };
};
//Action Đặt vé
export const actDatVeApi = (thongTinVe, token) => {
  return (dispatch) => {
    dispatch(actDetailMovieRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
      method: "POST",
      data: thongTinVe,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        dispatch(layThongTinPhongVeApiAction(thongTinVe.maLichChieu));
        dispatch({ type: "DAT_VE_THANH_CONG" });
        Swal.fire("Thông báo", "Đặt vé thành công !", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const datGheAction = (ghe, giaVe, stt) => {
  return {
    type: ActionType.DAT_GHE,
    gheDangDat: {
      maGhe: ghe,
      giaVe: giaVe,
      stt: stt,
    },
  };
};
export const huyGheAction = (soGhe) => {
  return {
    type: ActionType.HUY_GHE,
    soGhe,
  };
};
