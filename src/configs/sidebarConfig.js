// module.exports = ["About", "Resume", "Projects", "Blog"];

import Feature from "../utility/featureConfig";
export const createNavigationTabs = () => {
  let array = [];
  if (Feature.about) {
    array.push("About");
  }
  if (Feature.resume) {
    array.push("Resume");
  }
  if (Feature.projects) {
    array.push("Projects");
  }
  if (Feature.blogs) {
    array.push("Blog");
  }
  if (array.length === 1) {
    array = [];
  }
  return array;
};
