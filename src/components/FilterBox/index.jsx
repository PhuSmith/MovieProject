import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import styles from "./FilterBox.module.scss";
import * as movieListActions from "../../redux/actions/movieListActions";
import * as seatPlanActions from "../../redux/actions/seatPlanActions";

function FilterBox() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    movies,
    theaterFilter,
    dateFilter,
    hourFilter,
    filterResult,
  } = useSelector((state) => state.movieListReducer);
  console.log(movies);

  const onChangeMovieHandler = (e) => {
    const movieId = e.target.value.split("- ")[1];
    console.log(movieId);
    dispatch(movieListActions.actChooseMovieFilter(movieId));
  };
  const onChangeTheaterHandler = (e) => {
    dispatch(movieListActions.actChooseTheaterFilter(e.target.value));
  };
  const onChangeDateHandler = (e) => {
    dispatch(movieListActions.actChooseDateFilter(e.target.value));
  };
  const onChangeHourHandler = (e) => {
    dispatch(movieListActions.actChooseHourFilter(e.target.value));
  };
  const renderDateFilterHandler = (dateFilter) => {
    let uniqueDate = [];
    dateFilter.forEach((item) => {
      uniqueDate.push(item.ngayChieuGioChieu.substring(0, 10));
    });
    uniqueDate = uniqueDate.filter((v, i, a) => a.indexOf(v) === i);
    return uniqueDate.map((date, index) => <option key={index}>{date}</option>);
  };
  return (
    <div className={`${styles.Search} container-lg p-0`}>
      <div className={styles.Overlay}></div>
      <div className={styles.Content}>
        <div className={styles.Header}></div>
        <div className={styles.Bottom}>
          <form className={styles.SearchForm}>
            <div className="row">
              <div className="col-9">
                <div className="row">
                  <div className="col-3">
                    <select
                      className={styles.Select}
                      defaultValue={"DEFAULT"}
                      onChange={onChangeMovieHandler}
                    >
                      <option value="DEFAULT" disabled>
                        Phim
                      </option>
                      {movies?.map((movie, index) => (
                        <option key={index}>
                          {movie.tenPhim} - {movie.maPhim}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={`${styles.TheaterOption} col-3`}>
                    <select
                      defaultValue={"DEFAULT"}
                      className={styles.Select}
                      onChange={onChangeTheaterHandler}
                    >
                      <option value="DEFAULT" disabled>
                        Rạp
                      </option>
                      {theaterFilter?.map((theater, index) => (
                        <option key={index}>{theater.tenCumRap}</option>
                      ))}
                    </select>
                  </div>
                  <div className={`${styles.DateOption} col-3`}>
                    <select
                      defaultValue={"DEFAULT"}
                      className={styles.Select}
                      onChange={onChangeDateHandler}
                    >
                      <option value="DEFAULT" disabled>
                        Ngày xem
                      </option>
                      {renderDateFilterHandler(dateFilter)}
                    </select>
                  </div>
                  <div className={`${styles.HoursOption} col-3`}>
                    <select
                      defaultValue={"DEFAULT"}
                      className={styles.Select}
                      onChange={onChangeHourHandler}
                    >
                      <option value="DEFAULT" disabled>
                        Suất chiếu
                      </option>
                      {hourFilter?.map((hour, index) => (
                        <option key={index}>
                          {hour.ngayChieuGioChieu.substring(11, 19)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className={`${styles.HoursOption}  col-12 `}>
                  {filterResult ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        history.push(`/chitietPhongVe/${filterResult}`);
                        dispatch(seatPlanActions.actClearShowTimeDetail());
                        dispatch(movieListActions.actClearFilterResult());
                      }}
                    >
                      MUA VÉ NGAY
                    </button>
                  ) : (
                    <button
                      className="btn btn-secondary"
                      style={{ cursor: "not-allowed" }}
                      disabled
                    >
                      MUA VÉ NGAY
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default withRouter(FilterBox);
