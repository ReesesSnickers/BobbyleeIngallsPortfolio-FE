import React from 'react';
import PortfolioCarousel from './PortfolioCarousel';

const AssetContainer = ({ project }) => {
  return (
    <section>
      {project.url ? (
        <div>hass website</div>
      ) : (
        <PortfolioCarousel assets={project.assets} />
      )}
      <style jsx>{`
        section {
          height: 400px;
          max-height: 400px;
        }
      `}</style>
    </section>
  );
};

export default AssetContainer;
