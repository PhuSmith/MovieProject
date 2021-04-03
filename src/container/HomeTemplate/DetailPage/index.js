import React, { Component } from "react";
import { actDetailMovieApi } from "./modules/action";
import { connect } from "react-redux";
import Loader from "./../../../components/Loader";
import { Link } from "react-router-dom";

class DetailMovie extends Component {
  componentDidMount() {
    //lấy id từ url
    const id = this.props.match.params.id;
    console.log(id);
    this.props.fetchDetailMovie(id);
  }

  renderTable = () => {
    const { data } = this.props;
    console.log(data);
    if (data) {
      return data.lichChieu.map((item) => {
        return (
          <tr key={item.maLichChieu}>
            <td>{item.thongTinRap.tenCumRap}</td>
            <td>{item.thongTinRap.tenRap}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
            <td>
              <Link className="btn btn-success" to="#phong-ve">
                Chọn ghế
              </Link>
            </td>
          </tr>
        );
      });
    }
  };

  render() {
    const { data, loading } = this.props;
    if (loading) return <Loader />;
    return (
      <div>
        <img
          className="img-fluid"
          src={data && data.hinhAnh}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "100%",
            position: "fixed",
          }}
        />
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to top, rgb(10, 32, 41), transparent 100%)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img className="img-fluid" src={data && data.hinhAnh} alt="" />
            </div>
            <div className="col-md-6">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Ten Phim</td>
                    <td>{data && data.tenPhim}</td>
                  </tr>
                  <tr>
                    <td>Mo ta</td>
                    <td>{data && data.moTa}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" style={{ background: "white" }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Cum rap</th>
                    <th>Ten rap</th>
                    <th>Ngay chieu</th>
                    <th>Gio chieu</th>
                  </tr>
                </thead>
                <tbody>{this.renderTable()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.detailMovieReducer.loading,
    data: state.detailMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetailMovie: (id) => {
      dispatch(actDetailMovieApi(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);
