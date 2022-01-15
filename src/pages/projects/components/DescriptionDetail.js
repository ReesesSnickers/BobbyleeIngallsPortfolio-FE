import React, { useReducer } from 'react';
import DetailContainer from './DetailContainer';

const DescriptionDetail = ({ description }) => {
  const [isOpen, toggle] = useReducer((isOpen) => !isOpen, true);
  return (
    <DetailContainer title="Description" isOpen={isOpen} toggle={toggle}>
      <div className={!isOpen ? 'closed' : ''}>
        <p>{description}</p>
      </div>
      <style jsx>{`
        p {
          margin: 0px;
        }
        .closed {
          max-height: 30px;
        }
        .closed p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `}</style>
    </DetailContainer>
  );
};

export default DescriptionDetail;
