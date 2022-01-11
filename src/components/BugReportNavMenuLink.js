import React from 'react';
import NavMenuLink from './buttons/NavMenuLink';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import URLs from '../utility/constants/urls';

const BugReportNavMenuLink = () => {
  return (
    <NavMenuLink
      to={{
        pathname: URLs.GITHUB_BUG_REPORT,
      }}
      target="_blank"
      rel="noopener noreferrer"
      label="Report Bug"
      icon={faBug}
    />
  );
};

export default BugReportNavMenuLink;
