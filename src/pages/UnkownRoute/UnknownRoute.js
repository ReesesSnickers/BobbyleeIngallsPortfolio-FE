import React from "react";
import { Messages } from "../../utility/constants/messages";

const UnknownRoute = () => {
  return (
    <section>
      <h1>{Messages.BAD_ROUTE_TITLE}</h1>
      <h2>{Messages.BAD_ROUTE_ACTION}</h2>
      <style jsx>{`
        section {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        h2 {
          color: #0e1a3c;
          font-size: 20px;
          font-family: Helvetica, Arial, sans-serif;
          text-align: center;
          width: 600px;
          margin: 0px;
          transition: font 0.3s linear, width 0.3s linear;
        }
        h1 {
          color: #0e1a3c;
          font-size: 30px;
          font-family: Helvetica, Arial, sans-serif;
          text-align: center;
          width: 600px;
          margin: 0px 0px 20px 0px;
          font-weight: bold;
          transition: font 0.3s linear, width 0.3s linear;
        }
        @media screen and (max-width: 630px) {
          h2 {
            font-size: 20px;
            width: 500px;
            transition: font 0.3s linear, width 0.3s linear;
          }
          h1 {
            font-size: 30px;
            width: 500px;
            transition: font 0.3s linear, width 0.3s linear;
          }
        }
        @media screen and (max-width: 530px) {
          h2 {
            font-size: 15px;
            width: 400px;
            transition: font 0.3s linear, width 0.3s linear;
          }
          h1 {
            font-size: 25px;
            width: 400px;
            transition: font 0.3s linear, width 0.3s linear;
          }
        }
        @media screen and (max-width: 430px) {
          h2 {
            font-size: 15px;
            width: 300px;
            transition: font 0.3s linear, width 0.3s linear;
          }
          h1 {
            font-size: 20px;
            width: 300px;
            transition: font 0.3s linear, width 0.3s linear;
          }
        }
      `}</style>
    </section>
  );
};

export default UnknownRoute;
