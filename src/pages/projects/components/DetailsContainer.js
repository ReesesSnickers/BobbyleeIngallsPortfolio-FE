import React from 'react';
import CompanyDescriptionLabel from './CompanyDescriptionLabel';
import DetailsDescriptionLabel from './DetailsDescriptionLabel';
import EndedDateDescriptionLabel from './EndedDateDescriptionLabel';
import RepositoryDescriptionLabel from './RepositoryDescriptionLabel';
import StartedDateDescriptionLabel from './StartedDateDescriptionLabel';

const DetailsContainer = ({ project }) => {
  const { company, startDate, endDate, description, repos } = project;
  return (
    <section>
      <CompanyDescriptionLabel company={company} />
      <RepositoryDescriptionLabel repositories={repos} />
      <StartedDateDescriptionLabel date={startDate} />
      <EndedDateDescriptionLabel date={endDate} />
      <DetailsDescriptionLabel details={description} />
    </section>
  );
};

export default DetailsContainer;
