import React, { Component } from "react";
import "./styles.css";
import mobile from "../../assets/images/slide1.jpg";
import mobile1 from "../../assets/images/slide10.jpg";

export default class AppMobile extends Component {
  render() {
    return (
      <section className="app__content">
        <div className="row">
          <div className="col-12 block" id="homeApp">
            <div className="mainMaxWidth" id="homeApp">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-9 left text-left">
                    <p className="text-left">
                      Ứng dụng tiện lợi dành cho người yêu điện ảnh
                    </p>
                    <br />
                    <p className="textSmallLeft">
                      Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                      rạp và đổi quà hấp dẫn.
                    </p>
                    <br />
                    <a
                      href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="buttonLeft">
                        App miễn phí - Tải về ngay!
                      </button>
                    </a>
                    <p>
                      TIX có hai phiên bản
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                      >
                        iOS
                      </a>
                      &amp;&nbsp;
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                      >
                        Android
                      </a>
                    </p>
                  </div>
                  <div className="col-12 col-lg-3 right">
                    <div className="imgMoblie">
                      <div className="phone-img">
                        <img src="./images/mobile.png" alt="" />
                      </div>
                      <div
                        id="carouselControls"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <div className="carousel-inner">
                          <div className="carousel-item">
                            <img
                              src={mobile}
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src={mobile1}
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item active">
                            <img
                              src={mobile}
                              className="d-block w-"
                              alt="..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
