import * as sharedConstants from "../types/sharedConstants";

const initialState = {
  videoTrailer: "",
  isOpenVideoTrailer: false,
};

const sharedReducer = (state = initialState, action) => {
  switch (action.type) {
    case sharedConstants.VIEW_TRAILER:
      state.videoTrailer = action.payload;
      return { ...state };

    case sharedConstants.IS_OPEN_VIDEO_TRAILER:
      state.isOpenVideoTrailer = action.payload;
      return { ...state };

    default:
      return state;
  }
};
export default sharedReducer;
