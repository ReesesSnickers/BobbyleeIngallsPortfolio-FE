import React from 'react';
import DescriptionLabel from './DescriptionLabel';

const EndedDateDescriptionLabel = ({ date = '' }) => {
  return <DescriptionLabel label="Ended Project" information={date} />;
};

export default EndedDateDescriptionLabel;
