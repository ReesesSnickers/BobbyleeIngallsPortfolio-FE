import React from 'react';

const DescriptionLabel = ({ label, information }) => {
  return (
    <div>
      <h2>{label}:</h2>
      <p>{information}</p>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: row;
        }
        h2 {
          width: 200px;
          margin-right: 50px;
        }
      `}</style>
    </div>
  );
};

export default DescriptionLabel;
