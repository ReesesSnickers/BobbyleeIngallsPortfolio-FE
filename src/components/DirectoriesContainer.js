import React from 'react';
import HomeNavMenuLink from './HomeNavMenuLink';
import ProjectsNavMenuLink from './ProjectsNavMenuLink';
import ResumeNavMenuLink from './ResumeNavMenuLink';
import BlogsNavMenuLink from './BlogsNavMenuLink';
import Feature from '../utility/featureConfig';
import Colors from '../utility/constants/colors';

const DirectoriesContainer = ({ closeMenu }) => {
  return (
    <section className="directories">
      <ul>
        <li onClick={() => closeMenu()}>
          <HomeNavMenuLink />
        </li>
        {Feature.projects && (
          <li onClick={() => closeMenu()}>
            <ProjectsNavMenuLink />
          </li>
        )}
        {Feature.resume && (
          <li onClick={() => closeMenu()}>
            <ResumeNavMenuLink />
          </li>
        )}
        {Feature.blogs && (
          <li onClick={() => closeMenu()}>
            <BlogsNavMenuLink />
          </li>
        )}
      </ul>
      <style jsx>{`
        section {
          padding: 10px;
        }
        .directories li {
          padding: 10px;
          height: 60px;
          border-radius: 3px;
          overflow: hidden;
        }
        .directories li:hover {
          box-shadow: 0px 0px 3px 5px ${Colors.BRIGHT_GREEN};
          -moz-transition: all 0.2s ease-in;
          -o-transition: all 0.2s ease-in;
          -webkit-transition: all 0.2s ease-in;
          transition: all 0.2s ease-in;
        }
      `}</style>
    </section>
  );
};

export default DirectoriesContainer;
