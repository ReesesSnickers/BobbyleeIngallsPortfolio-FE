import React from 'react';
import DescriptionLabel from './DescriptionLabel';

const StartedDateDescriptionLabel = ({ date = '' }) => {
  return <DescriptionLabel label="Started Project" information={date} />;
};

export default StartedDateDescriptionLabel;
