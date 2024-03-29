import React, { useReducer } from 'react';
import { Messages } from '../../../utility/constants/messages';
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
        {!hasTechnologies ? <p>{Messages.UNAVALIABLE_TECHNOLOGY}</p> : null}
        {hasTechnologies ? (
          <div className="cards-wrapper">
            {technologies.map((technology) => {
              return (
                <TechnologyCard key={technology.name} technology={technology} />
              );
            })}
          </div>
        ) : null}
      </div>
      <style jsx>{`
        p {
          margin: 0px;
        }
        .closed {
          max-height: 153px;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .cards-wrapper {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
      `}</style>
    </DetailContainer>
  );
};

export default TechnologiesDetail;
