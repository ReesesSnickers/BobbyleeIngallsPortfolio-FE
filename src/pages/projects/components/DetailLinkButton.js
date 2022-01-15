import React from 'react';
import Colors from '../../../utility/constants/colors';

const DetailLinkButton = ({ label, ...props }) => {
  return (
    <button {...props}>
      {label}
      <style jsx>{`
        button {
          background-color: transparent;
          border: none;
          color: ${Colors.WHITE};
          cursor: pointer;
        }
      `}</style>
    </button>
  );
};

export default DetailLinkButton;
