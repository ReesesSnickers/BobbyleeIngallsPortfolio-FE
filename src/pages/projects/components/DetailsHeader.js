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
          display: flex;
          flex-direction: column;
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
