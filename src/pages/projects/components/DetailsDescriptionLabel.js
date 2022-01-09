import React from 'react';
import DescriptionLabel from './DescriptionLabel';

const DetailsDescriptionLabel = ({ details = '' }) => {
  return <DescriptionLabel label="Description" information={details} />;
};

export default DetailsDescriptionLabel;
