import React, { Component } from "react";
import { connect } from "react-redux";
import { actDetailCinemaApi } from "../../redux/actions/QuanLyRapAction";

class Cinema extends Component {
  componentDidMount() {
    const { cinema } = this.props;
    this.props.fetchDetailCinema(cinema.maHeThongRap);
  }

  render() {
    return (
      <div>
        {/* <div className="tab-content row" id="v-pills-tabContent">
          {data?.map((heThongRap, index) => {
            // console.log(heThongRap);
            return (
              <div key={index} className="col-3">
                <p>{heThongRap.logo}</p>

                <div className="col-9">
                  {heThongRap.danhSachRap?.map((cumRap, index) => {
                    console.log(cumRap);
                    return (
                      <div key={index}>
                        <p style={{ fontWeight: "bold", fontSize: "25px" }}>
                          {cumRap.tenRap}
                        </p>
                        <div className="row">
                          {cumRap.lichChieuPhim
                            ?.slice(0, 12)
                            .map((lichChieu, index) => {
                              return (
                                <Link
                                  to={"/chitietPhongVe" + lichChieu.maLichChieu}
                                  key={index}
                                >
                                  {moment(lichChieu.ngayChieuGioChieu).format(
                                    "hh:mm A"
                                  )}
                                </Link>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div> */}
        <div className="row">
          <div className="col-3">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Home
              </a>
              <a
                className="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Profile
              </a>
              <a
                className="nav-link"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                Messages
              </a>
              <a
                className="nav-link"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Settings
              </a>
            </div>
          </div>
          <div className="col-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                dsfdsfsdfsdfds
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                sdfdsfdsfds
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                fsdfsdfdsfdsf
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                fdsfdsfsdfsf
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.QuanLyRapReducer.loading,
    data: state.QuanLyRapReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetailCinema: (id) => {
      dispatch(actDetailCinemaApi(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cinema);
