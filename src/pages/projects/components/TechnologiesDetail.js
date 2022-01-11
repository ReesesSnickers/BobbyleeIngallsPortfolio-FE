import React, { useReducer } from 'react';
import DetailContainer from './DetailContainer';
import TechnologyCard from './TechnologyCard';

const TechnologiesDetail = ({ technologies = [] }) => {
  const [isOpen, toggle] = useReducer((isOpen) => !isOpen, false);
  const hasTechnologies = technologies.length > 0;
  return (
    <DetailContainer
      title="Technologies"
      isOpen={isOpen}
      toggle={toggle}
      numberOfItems={technologies.length}
      showOpenToggle={hasTechnologies}
    >
      <div className={!isOpen ? 'closed' : ''}>
        {!hasTechnologies ? <p>No technologies available to display.</p> : null}
        {hasTechnologies ? <TechnologyCard /> : null}
      </div>
      <style jsx>{`
        p {
          margin: 0px;
        }
        .closed {
          max-height: 30px;
        }
      `}</style>
    </DetailContainer>
  );
};

export default TechnologiesDetail;
