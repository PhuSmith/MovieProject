import * as ActionType from "../types/QuanLyRapType";

let initialState = {
  loading: false,
  data: [],
  err: null,
  dsRap: [],
  chiTietRap: [],
  cumRap: [],
};

const QuanLyRapReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.DETAIL_CINEMA_REQUEST:
      state.loading = true;
      state.dsRap = null;
      state.err = null;
      return { ...state };

    case ActionType.DETAIL_CINEMA_SUCCESS:
      state.loading = false;
      state.dsRap = action.payload;
      state.err = null;
      return { ...state };

    case ActionType.DETAIL_CINEMA_FAILED:
      state.loading = false;
      state.dsRap = null;
      state.err = action.payload;
      return { ...state };

    case ActionType.LIST_CINEMA_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ActionType.LIST_CINEMA_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case ActionType.LIST_CINEMA_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default QuanLyRapReducer;
