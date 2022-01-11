import React from 'react';
import DescriptionLabel from './DescriptionLabel';

const CompanyDescriptionLabel = ({ company = '' }) => {
  return <DescriptionLabel label="Company" information={<p>{company}</p>} />;
};

export default CompanyDescriptionLabel;
