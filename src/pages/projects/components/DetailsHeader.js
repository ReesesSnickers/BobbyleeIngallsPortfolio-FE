import React from 'react';

const DetailsHeader = ({ project }) => {
  const { title, company, startDate, endDate } = project;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{company}</h2>
      <h2>
        {startDate} - {endDate}
      </h2>
      <style jsx>{`
        div {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        h2 {
          margin: 0px;
        }
        h1 {
          margin-bottom: 0px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default DetailsHeader;
