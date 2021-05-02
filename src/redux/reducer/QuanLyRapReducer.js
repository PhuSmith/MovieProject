import * as ActionType from "../types/QuanLyRapType";

let initialState = {
  loading: false,
  err: null,
  data: [],
  dsRap: [],
  chiTietRap: [],
  cumRap: [],
  maRap: ["BHDStar"],
};

const QuanLyRapReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.DETAIL_THEATER_REQUEST:
      state.loading = true;
      state.dsRap = null;
      state.err = null;
      return { ...state };

    case ActionType.DETAIL_THEATER_SUCCESS:
      state.loading = false;
      state.dsRap = action.payload;
      state.err = null;
      return { ...state };

    case ActionType.DETAIL_THEATER_FAILED:
      state.loading = false;
      state.dsRap = null;
      state.err = action.payload;
      return { ...state };

    case ActionType.LIST_THEATERS_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ActionType.LIST_THEATERS_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case ActionType.LIST_THEATERS_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    case ActionType.MA_HE_THONG_RAP:
      state.maRap = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default QuanLyRapReducer;
