import React from "react";

const AboutDivider = () => {
  return (
    <div className="divider">
      <div className="line" />
      <div className="circle" />
      <div className="line" />
      <style jsx>
        {`
          .divider {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin-top: 70px;
            margin-bottom: 30px;
          }
          .line {
            width: 389px;
            height: 5px;
            background-color: #0e1a3c;
            margin: 0px 25px;
            transition: width 0.3s linear;
          }
          .circle {
            width: 66px;
            height: 66px;
            border: 5px solid #0e1a3c;
            border-radius: 50%;
            transition: border 0.3s linear;
          }
          @media screen and (max-width: 1450px) {
            .line {
              width: 300px;
              transition: width 0.3s linear;
            }
          }
          @media screen and (max-width: 1270px) {
            .line {
              width: 225px;
              transition: width 0.3s linear;
            }
          }
          @media screen and (max-width: 1024px) {
            .line {
              width: 300px;
              transition: width 0.3s linear;
            }
          }
          @media screen and (max-width: 800px) {
            .line {
              width: 225px;
              transition: width 0.3s linear;
            }
          }
          @media screen and (max-width: 700px) {
            .portfolio-about-dividerline {
              height: 3px;
              transition: height 0.3s linear, width 0.3s linear;
            }
            .circle {
              border: 3px solid #0e1a3c;
              transition: border 0.3s linear, height 0.3s linear,
                width 0.3s linear;
            }
          }
          @media screen and (max-width: 630px) {
            .line {
              width: 175px;
              transition: width 0.3s linear;
            }
          }
          @media screen and (max-width: 630px) {
            .line {
              width: 125px;
              transition: width 0.3s linear, height 0.3s linear;
            }
          }
          @media screen and (max-width: 450px) {
            .line {
              width: 75px;
              height: 2px;
              transition: width 0.3s linear, height 0.3s linear;
            }
            .circle {
              width: 53px;
              height: 53px;
              border: 2px solid #0e1a3c;
              border-radius: 50%;
              transition: border 0.3s linear, height 0.3s linear,
                width 0.3s linear;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AboutDivider;
