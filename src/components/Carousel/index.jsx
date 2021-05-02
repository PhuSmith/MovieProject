import React, { Component } from "react";
import Slider from "react-slick";
import "./styles.css";
import FilterBox from "../FilterBox";
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick}></div>;
}
function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick}></div>;
}
export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 200,
      lazyLoad: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      appendDots: (dots) => (
        <div>
          <ul style={{ margin: "0px" }}>{dots} </ul>
        </div>
      ),
      customPaging: (i) => (
        <div
          className="dot"
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#d8d8d8",
          }}
        ></div>
      ),
    };
    return (
      <div className="carousel container">
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
        <div>
          <FilterBox />
        </div>
      </div>
    );
  }
}
