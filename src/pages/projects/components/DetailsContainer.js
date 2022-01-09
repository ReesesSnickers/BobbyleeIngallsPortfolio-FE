import React from 'react';
import CompanyDescriptionLabel from './CompanyDescriptionLabel';
import DetailsDescriptionLabel from './DetailsDescriptionLabel';
import EndedDateDescriptionLabel from './EndedDateDescriptionLabel';
import StartedDateDescriptionLabel from './StartedDateDescriptionLabel';

const DetailsContainer = ({ project }) => {
  const { company, startDate, endDate, description } = project;
  return (
    <>
      <CompanyDescriptionLabel company={company} />
      <StartedDateDescriptionLabel date={startDate} />
      <EndedDateDescriptionLabel date={endDate} />
      <DetailsDescriptionLabel details={description} />
    </>
  );
};

export default DetailsContainer;
