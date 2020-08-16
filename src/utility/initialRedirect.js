import Features from "./featureConfig";
import { ROUTES } from "./constants/routes";

export const initialRedirect = () => {
  let returnRoute;

  returnRoute = Features.about
    ? ROUTES.ABOUT
    : Features.projects
    ? ROUTES.PROJECTS
    : Features.blogs
    ? ROUTES.BLOG
    : Features.resume
    ? ROUTES.RESUME
    : ROUTES.UNKNOWN;

  return returnRoute;
};
