import React, { Component } from "react";
import { connect } from "react-redux";
import { actDetailCinemaApi } from "../../redux/actions/actDetailCinemaApi";
import DanhSachRap from "../DanhSachRap";
import { Link } from "react-router-dom";
class Cinema extends Component {
  componentDidMount() {
    //Chạy 1 lần duy nhất
    //lấy id từ url
    const { cinema } = this.props;
    this.props.fetchDetailCinema(cinema.maHeThongRap);
  }

  render() {
    const { cinema } = this.props;
    return (
      <div className="row">
        <div className="card">
          <div className="card-body">
            <img
              src={cinema.logo}
              wigh={50}
              height={50}
              alt=""
              onClick={() => {
                this.renderTable(cinema.maHeThongRap);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  // renderHTML = (id) => {
  //   return id.map((item, index) => {
  //     return <DanhSachRap key={index} cumRap={item} />;
  //   });
  // };
  // renderHTML = (id) => {
  //   const { data } = this.props;

  //   if (id === "CGV")
  //     return (
  //       data &&
  //       data.map((item, index) => {
  //         return <Link key={index}>{item.tenCumRap}</Link>;
  //       })
  //     );
  // };

  renderTable = (id) => {
    const { data } = this.props;

    switch (id) {
      case "BHDStar": {
        return data.map((item) => {
          return (
            // <tr key={index}>
            //   <td>{item.tenCumRap}</td>
            //   <td>{item.diaChi}</td>
            //   <td>
            //     <div className="btn btn-success">Chọn ghế</div>
            //   </td>
            // </tr>
            this.renderHTML(item)
          );
        });
      }
      case "CGV": {
        return data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.tenCumRap}</td>
              <td>{item.diaChi}</td>
              <td>
                <div className="btn btn-success">Chọn ghế</div>
              </td>
            </tr>
          );
        });
      }
      case "CineStar": {
        return data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.tenCumRap}</td>
              <td>{item.diaChi}</td>
              <td>
                <div className="btn btn-success">Chọn ghế</div>
              </td>
            </tr>
          );
        });
      }
      case "Galaxy": {
        return data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.tenCumRap}</td>
              <td>{item.diaChi}</td>
              <td>
                <div className="btn btn-success">Chọn ghế</div>
              </td>
            </tr>
          );
        });
      }
      case "LotteCinima": {
        return data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.tenCumRap}</td>
              <td>{item.diaChi}</td>
              <td>
                <div className="btn btn-success">Chọn ghế</div>
              </td>
            </tr>
          );
        });
      }
      case "MegaGS": {
        return data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.tenCumRap}</td>
              <td>{item.diaChi}</td>
              <td>
                <div className="btn btn-success">Chọn ghế</div>
              </td>
            </tr>
          );
        });
      }

      default:
    }
  };
}

const mapStateToProps = (state) => {
  return {
    loading: state.detailCinemaReducer.loading,
    data: state.detailCinemaReducer.data,
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
