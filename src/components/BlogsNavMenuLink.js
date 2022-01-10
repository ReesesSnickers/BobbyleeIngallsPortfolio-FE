import React from 'react';
import { ROUTES } from '../utility/constants/routes';
import NavMenuLink from './buttons/NavMenuLink';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

const BlogsNavMenuLink = () => {
  return <NavMenuLink to={ROUTES.BLOG} label="Blogs" icon={faNewspaper} />;
};

export default BlogsNavMenuLink;
