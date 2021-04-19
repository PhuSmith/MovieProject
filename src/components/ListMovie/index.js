import React, { Component } from "react";
import Movie from "../Movie";
// import Loader from "../Loader";
import { actListMovieApi } from "../../redux/actions/QuanLyPhimAction";
import { connect } from "react-redux";
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
      <div>
        <div style={{ maxWidth: "940px", margin: "0 auto" }}>
          <ul className="nav nav-tabs my-5" id="myTab" role="tablist">
            <li className="nav-item col-6">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Đang chiếu
              </a>
            </li>
            <li className="nav-item col-6">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Sắp chiếu
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
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
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              ...
            </div>
          </div>
        </div>
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
