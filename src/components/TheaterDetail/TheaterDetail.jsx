import React, { useEffect } from "react";
import { actDetailTheaterApi } from "../../redux/actions/QuanLyRapAction";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

function TheaterDetail() {
  const dispatch = useDispatch();

  const { dsRap, maRap } = useSelector((state) => state.QuanLyRapReducer);

  useEffect(() => {
    dispatch(actDetailTheaterApi(maRap));
  }, [maRap]);

  return (
    <div className="nav nav-tabs">
      {dsRap?.map((rap, index) => {
        return rap?.lstCumRap.map((cumRap, index) => {
          let active = index === 0 ? "active" : "";
          return (
            <div
              className={"logo__wrapper " + active}
              data-toggle="tab"
              role="tab"
              data-target={"#" + cumRap.maCumRap}
            >
              <div className="cinema__details--item">
                <img className="theaterList__image" src={rap.logo} alt="" />
                <div className="wrapInfo">
                  <span className="chiNhanh">
                    <span className="tenRap BHD Star">
                      {cumRap.tenCumRap.split("- ")[0]}
                    </span>
                    -{cumRap.tenCumRap.split("-")[1]}
                  </span>
                  <span className="diaChi">{cumRap.diaChi}</span>
                </div>
              </div>
            </div>
          );
        });
      })}
    </div>
  );
}

export default TheaterDetail;
