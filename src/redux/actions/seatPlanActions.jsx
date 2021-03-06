import * as seatPlanConstants from "../types/seatPlanConstants";
import { seatPlanServices } from "../../services/SeatPlanServices";

export const actFetchShowTimeDetail = (showTimeId) => {
  return (dispatch) => {
    dispatch({ type: seatPlanConstants.FETCH_SHOW_TIME_DETAIL_REQUEST });
    return seatPlanServices
      .fetchShowTimeDetail(showTimeId)
      .then((res) => {
        dispatch({
          type: seatPlanConstants.FETCH_SHOW_TIME_DETAIL_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: seatPlanConstants.FETCH_SHOW_TIME_DETAIL_FAIL,
          payload: err.response.data,
        });
      });
  };
};

export const actGetSelectedSeats = (seat, seatNum, seatName) => {
  return {
    type: seatPlanConstants.GET_SELECTED_SEATS,
    seat,
    seatNum,
    seatName,
  };
};

export const actClearShowTimeDetail = () => {
  return {
    type: seatPlanConstants.CLEAR_SHOW_TIME_DETAIL,
  };
};
