import React, { Component } from "react";
import { connect } from "react-redux";
import { actListCinemaApi } from "../../redux/actions/QuanLyRapAction";
import Cinema from "../Cinema";
class ListCinema extends Component {
  componentDidMount() {
    this.props.fetchListCinema();
  }

  render() {
    const { data } = this.props;
    // console.log(data);
    return (
      <div className="row mt-5">
        <div className="col-12">
          <div className="row">
            <div
              className="nav flex-column nav-pills col-3"
              id="v-pills-tab"
              role="tablist"
              // aria-orientation
            >
              {data?.map((heThongRap, index) => {
                let active = index === 0 ? "active" : "";
                return (
                  <div>
                    <a
                      key={index}
                      cinema={heThongRap}
                      className={"tab-pane fade show" + active}
                      id="v-pills-tab"
                      data-toggle=""
                    >
                      <img
                        src={heThongRap.logo}
                        alt={heThongRap.logo}
                        style={{ width: 50, height: 50 }}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="col-9">
              {data?.map((rap, index) => {
                return <Cinema cinema={rap} key={index} />;
              })}
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
    fetchListCinema: () => {
      dispatch(actListCinemaApi());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCinema);
