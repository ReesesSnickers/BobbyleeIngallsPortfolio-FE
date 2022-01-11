import React from 'react';
import DescriptionLabel from './DescriptionLabel';

const DetailsDescriptionLabel = ({ details = '' }) => {
  return (
    <DescriptionLabel label="Description" information={<p>{details}</p>} />
  );
};

export default DetailsDescriptionLabel;
