import * as sharedConstants from "../types/sharedConstants";

export const actViewTrailer = (videoTrailer) => {
  return {
    type: sharedConstants.VIEW_TRAILER,
    payload: videoTrailer,
  };
};

export const actIsOpenVideoTrailer = (isOpen) => {
  return {
    type: sharedConstants.IS_OPEN_VIDEO_TRAILER,
    payload: isOpen,
  };
};
