import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      classNames: "slides",
      arrows: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              width="100%"
              src={
                "https://s3img.vcdn.vn/123phim/2021/03/oi-troi-oi-16167488704232.jpg"
              }
              alt=""
            />
          </div>
          <div>
            <img
              width="100%"
              src={
                "https://s3img.vcdn.vn/123phim/2021/03/harry-potter-16167486102625.jpg"
              }
              alt=""
            />
          </div>
          <div>
            <img
              width="100%"
              src={
                "https://s3img.vcdn.vn/123phim/2021/03/bo-gia-16146819941008.png"
              }
              alt=""
            />
          </div>
          <div>
            <img
              width="100%"
              src={
                "https://s3img.vcdn.vn/123phim/2021/03/minari-16158836515210.jpg"
              }
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
