import React from "react";
import "./Content.css";
import "../image/img.jpg";

const Content = () => {
  const sshDatum = [
    {
      id: 1,
      job: "여왕개미",
      name: "홍길동_1",
      field: "선호분야_1",
      language: "언어_1",
    },
    {
      id: 2,
      job: "여왕개미",
      name: "홍길동_1",
      field: "선호분야_1",
      language: "언어_1",
    },
    {
      id: 3,
      job: "여왕개미",
      name: "홍길동_1",
      field: "선호분야_1",
      language: "언어_1",
    },
    {
      id: 4,
      job: "여왕개미",
      name: "홍길동_1",
      field: "선호분야_1",
      language: "언어_1",
    },
    {
      id: 5,
      job: "여왕개미",
      name: "홍길동_1",
      field: "선호분야_1",
      language: "언어_1",
    },
    {
      id: 6,
      job: "여왕개미",
      name: "홍길동_1",
      field: "선호분야_1",
      language: "언어_1",
    },
  ];

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
        <div className="MemberBox">
          {sshDatum.map((data) => {
            return (
              <div key={data.id} className="member_mainbox">
                <div className="member_box"></div>
                <div className="title">
                  <div className="title_3">{data.job}</div>
                  <div className="title_3">{data.name}</div>
                  <div className="title_3">{data.field}</div>
                  <div className="title_4">{data.language}</div>
                </div>
              </div>
            );
          })}

          {/* <div className="member_mainbox2">
          <div className="member_box1"></div>
          </div>
          
          <div className="member_mainbox3">
          <div className="member_box2"></div>
          </div>
          
          <div className="member_mainbox4">
          <div className="member_box3"></div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Content;
