const BASE_ROUTES = {
  PROJECTS: '/projects',
};

export const ROUTES = {
  ABOUT: '/about',
  UNKNOWN: '/unknownroute',
  PROJECTS: `${BASE_ROUTES.PROJECTS}`,
  PROJECTS_PAGE: `${BASE_ROUTES.PROJECTS}/:title`,
  RESUME: '/resume',
  BLOG: '/blog',
  ROOT: '/',
};
