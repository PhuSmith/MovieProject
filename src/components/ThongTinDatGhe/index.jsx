import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../../redux/actions/actDatVe";
class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>{" "}
          <span style={{ fontSize: "30px" }}>Ghế đã đặt</span>
          <br />
          <button className="gheDangChon"></button>{" "}
          <span style={{ fontSize: "30px" }}>Ghế đang chọn</span>
          <br />
          <button className="ghe" style={{ marginLeft: 0 }}></button>{" "}
          <span style={{ fontSize: "30px" }}>Ghế chưa đặt</span>
        </div>

        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr style={{ fontSize: 35 }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-success">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        Huỷ
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-success">
                <td></td>
                <td>Tổng tiền</td>
                <td>
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.DatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
