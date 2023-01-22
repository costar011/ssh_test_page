import react from "react";
import "./Content.css";
import "../image/img.jpg";

const Content = () => {
  return (
    <div>
      <div className="Content">
        <div className="center_mainbox">
          <div className="main_box"></div>
          <div className="title_main">
            <div className="title_1">동아리 지도 교수</div>
            <div className="title_2">000</div>
          </div>
        </div>
      </div>

      <div className="Member">
        <div className="member_mainbox">
          <div className="member_box"></div>
        </div>

        <div className="member_mainbox2">
          <div className="member_box1"></div>
        </div>

        <div className="member_mainbox3">
          <div className="member_box2"></div>
        </div>

        <div className="member_mainbox4">
          <div className="member_box3"></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
