import * as ActionType from "../types/QuanLyPhimType";

let initialState = {
  loading: false,
  err: null,
  dsPhim: [],
  chiTietPhim: {},
  thongTinPhongVe: {},
  danhSachGheDangDat: [],

  // Filter
  theaterFilter: [],
  dateFilter: [],
  hourFilter: [],
  filterResult: "",
};

const QuanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LIST_MOVIE_REQUEST:
      state.loading = true;
      state.dsPhim = null;
      state.err = null;
      return { ...state };
    case ActionType.LIST_MOVIE_SUCCESS:
      state.loading = false;
      state.dsPhim = action.payload;
      state.err = null;
      return { ...state };
    case ActionType.LIST_MOVIE_FAILED:
      state.loading = false;
      state.dsPhim = null;
      state.err = action.payload;
      return { ...state };
    case ActionType.DETAIL_MOVIE_REQUEST: {
      state.loading = true;
      state.chiTietPhim = action.payload;
      return { ...state };
    }
    case ActionType.DETAIL_MOVIE_SUCCESS: {
      state.chiTietPhim = action.payload;
      state.loading = false;
      return { ...state };
    }
    case ActionType.LAY_THONG_TIN_PHONG_VE_SUCCESS: {
      state.thongTinPhongVe = action.payload;
      return { ...state };
    }
    case ActionType.DAT_GHE: {
      let mangGheDangDat = [...state.danhSachGheDangDat];
      let index = mangGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.maGhe === action.gheDangDat.maGhe
      );

      if (index !== -1) {
        mangGheDangDat.splice(index, 1);
      } else {
        mangGheDangDat.push(action.gheDangDat);
      }

      state.danhSachGheDangDat = mangGheDangDat;

      return { ...state };
    }
    case "DAT_VE_THANH_CONG": {
      return { ...state, danhSachGheDangDat: [] };
    }
    case "HUY_GHE": {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe
      );
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default QuanLyPhimReducer;
