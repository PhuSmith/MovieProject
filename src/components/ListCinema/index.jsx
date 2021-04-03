import React, { Component } from "react";
import { connect } from "react-redux";
import { actListCinemaApi } from "../../redux/actions/actListCinemaApi";
import Loader from "../Loader";
import Cinema from "../Cinema";

class ListCinema extends Component {
  UNSAFE_componentWillMount() {
    this.props.fetchListCinema();
  }

  renderHTML = () => {
    const { loading, data } = this.props;

    if (loading) return <Loader />;
    return (
      data &&
      data.map((item, index) => {
        return <Cinema key={index} cinema={item} />;
      })
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div>{this.renderHTML()}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.listCinemaReducer.loading,
    data: state.listCinemaReducer.data,
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
