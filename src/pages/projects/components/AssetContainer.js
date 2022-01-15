import React from 'react';
import PortfolioCarousel from './PortfolioCarousel';

const AssetContainer = ({ project }) => {
  let forceCarousel = false;
  if (project.title === 'Bobbylee Ingalls Portfolio') forceCarousel = true;
  return (
    <section>
      {!forceCarousel && project.url ? (
        <iframe
          src={project.url}
          title={project.title}
          sandbox="allow-scripts allow-same-origin"
        />
      ) : (
        <div>
          <PortfolioCarousel assets={project.assets} />
        </div>
      )}
      <style jsx>{`
        div {
          max-height: 400px;
        }
        iframe {
          height: 500px;
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default AssetContainer;
