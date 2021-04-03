import React, { Component } from "react";
import NhanVien from "./nhan-vien";
// import SanPham from "./san-pham";
import WithModal from "./with-modal";

let FormModal = WithModal(NhanVien);

export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <FormModal />
      </div>
    );
  }
}
