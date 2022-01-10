import React from 'react';
import { ROUTES } from '../utility/constants/routes';
import NavMenuLink from './buttons/NavMenuLink';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const HomeNavMenuLink = () => {
  return <NavMenuLink to={ROUTES.ROOT} label="Home" icon={faHome} />;
};

export default HomeNavMenuLink;
