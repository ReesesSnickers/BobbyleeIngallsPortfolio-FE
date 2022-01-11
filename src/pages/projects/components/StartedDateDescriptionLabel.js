import React from 'react';
import DescriptionLabel from './DescriptionLabel';

const StartedDateDescriptionLabel = ({ date = '' }) => {
  return (
    <DescriptionLabel label="Started Project" information={<p>{date}</p>} />
  );
};

export default StartedDateDescriptionLabel;
