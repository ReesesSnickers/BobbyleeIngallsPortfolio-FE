import React from 'react';
import DescriptionLabel from './DescriptionLabel';

const EndedDateDescriptionLabel = ({ date = '' }) => {
  return <DescriptionLabel label="Ended Project" information={<p>{date}</p>} />;
};

export default EndedDateDescriptionLabel;
