import React from 'react';
import URLs from '../utility/constants/urls';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import NavIconButton from './buttons/NavIconButton';

const FacebookNavIconButton = () => {
  return (
    <NavIconButton
      href={URLs.FACEBOOK}
      ariaLabel="Facebook Profile"
      icon={faFacebookF}
    />
  );
};

export default FacebookNavIconButton;
