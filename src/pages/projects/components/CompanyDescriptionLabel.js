import React from 'react';
import DescriptionLabel from './DescriptionLabel';

const CompanyDescriptionLabel = ({ company = '' }) => {
  return <DescriptionLabel label="Company" information={company} />;
};

export default CompanyDescriptionLabel;
