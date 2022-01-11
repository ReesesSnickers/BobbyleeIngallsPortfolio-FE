import React from 'react';
import { Link } from 'react-router-dom';

const ExternalLink = ({ to, label, ...props }) => {
  // validate if the to contains a http/https request and remove it for React-Router requirements to link external
  const pathname = to.includes('http') ? `//${to.split('//')[1]}` : to;

  return (
    <Link
      className="external-link"
      to={{
        pathname: pathname,
      }}
      {...props}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </Link>
  );
};

export default ExternalLink;
