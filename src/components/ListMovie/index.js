import React, { Component } from "react";
import Movie from "../Movie";
// import Loader from "../Loader";
import { actListMovieApi } from "../../redux/actions/QuanLyPhimAction";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ListMovie extends Component {
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
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <Button variant="outlined" color="primary">
              Đang chiếu
            </Button>
            <Button variant="contained" color="primary">
              Sắp chiếu
            </Button>
          </div>
        </div>
        <Slider {...settings}>
          {data &&
            data.map((item, index) => {
              return <Movie key={index} movie={item} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
