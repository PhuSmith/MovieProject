import React, { Component } from "react";

export default class DanhSachRap extends Component {
  render() {
    const { cumRap } = this.props;
    console.log(cumRap);
    return (
      <div className="row">
        <div className="col-3">{/* <img src={cumRap.}alt /> */}</div>
        <div className="col-9 pl-2">
          <span>
            <b className="text-success">{cumRap}</b>
          </span>
          <p>{cumRap}</p>
          <p className="text-danger">[chi tiết]</p>
        </div>
      </div>
    );
  }
}
