import React, { Component } from "react";
import Slider from "react-slick";
import Movie from "../Movie";
import { actListMovieApi } from "../../redux/actions/QuanLyPhimAction";
import { connect } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class PhimDangChieu extends Component {
  componentDidMount() {
    this.props.fetchListMovie();
  }
  render() {
    const { data } = this.props;
    const settings = {
      className: "center",
      centerMode: false,
      infinite: true,
      slidesToShow: 4,
      speed: 500,
      rows: 1,
      slidesPerRow: 2,
    };
    return (
      <div>
        <Slider {...settings}>
          {data &&
            data.map((item, index) => {
              return (
                <Movie
                  key={index}
                  hinhAnh={item.hinhAnh}
                  tenPhim={item.tenPhim}
                  maPhim={item.maPhim}
                  videoTrailer={item.trailer}
                />
              );
            })}
        </Slider>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.QuanLyPhimReducer.loading,
    data: state.QuanLyPhimReducer.dsPhim,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListMovie: () => {
      dispatch(actListMovieApi());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PhimDangChieu);
