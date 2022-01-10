import React from 'react';
import URLs from '../utility/constants/urls';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import NavIconButton from './buttons/NavIconButton';

const LinkedInNavIconButton = () => {
  return (
    <NavIconButton
      href={URLs.LINKEDIN}
      ariaLabel="LinkedIn Profile"
      icon={faLinkedinIn}
    />
  );
};

export default LinkedInNavIconButton;
