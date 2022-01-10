import React from 'react';
import URLs from '../utility/constants/urls';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import NavIconButton from './buttons/NavIconButton';

const CodePenNavIconButton = () => {
  return (
    <NavIconButton
      href={URLs.CODEPEN}
      ariaLabel="Codepen Profile"
      icon={faCodepen}
    />
  );
};

export default CodePenNavIconButton;
