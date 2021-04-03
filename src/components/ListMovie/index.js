import React, { Component } from "react";
import Movie from "../Movie";
// import Loader from "../Loader";
import { actListMovieApi } from "../../redux/actions/actListMovieApi";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ListMovie extends Component {
  UNSAFE_componentWillMount() {
    this.props.fetchListMovie();
  }

  // renderHTML = () => {
  //   return (
  //     data &&
  //     data.map((item) => {
  //       console.log(item);
  //       return (
  //         <Slider>
  //           <div className="col-3">
  //             <div className="card">
  //               <img className="card-img-top" src={item.hinhAnh} alt="" />
  //               <div className="card-body">
  //                 <h4 className="card-title">{item.tenPhim}</h4>
  //                 <p className="card-text">{item.moTa}</p>
  //               </div>
  //             </div>
  //           </div>
  //         </Slider>
  //       );
  //     })
  //   );
  // };

  render() {
    const { data } = this.props;
    console.log(data);
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
            data.map((item) => {
              console.log(item);
              return <Movie movie={item} />;
            })}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listMoviceReducer.loading,
    data: state.listMoviceReducer.data,
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
