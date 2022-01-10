import React from 'react';
import { ROUTES } from '../utility/constants/routes';
import NavMenuLink from './buttons/NavMenuLink';
import { faScroll } from '@fortawesome/free-solid-svg-icons';

const ResumeNavMenuLink = () => {
  return (
    <NavMenuLink to={ROUTES.RESUME} label="Virtual Resume" icon={faScroll} />
  );
};

export default ResumeNavMenuLink;
