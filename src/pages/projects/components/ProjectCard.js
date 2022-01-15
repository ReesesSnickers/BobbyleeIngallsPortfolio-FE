import React from 'react';
import Colors from '../../../utility/constants/colors';
import Regex from '../../../utility/constants/regex';
import defaultImage from '../../../static/SadFace.png';
import { Link } from 'react-router-dom';
import CSS from '../../../utility/constants/CSS';

const ProjectCard = ({ title, image }) => {
  const linkToParam = title.replace(Regex.ALL_SPACES, '').toLowerCase();
  if (!image) image = defaultImage;
  return (
    <Link className="projectcard-link" to={linkToParam}>
      <img src={image} alt={title}></img>
      <h2>{title}</h2>
      <style jsx>{`
        :global(.projectcard-link) {
          width: 250px;
          height: 150px;
          margin: 0px 10px 20px;
          border-radius: ${CSS.CARD_BORDER_RADIUS};
          overflow: hidden;
          position: relative;
          text-align: center;
          transition: all 0.3s;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
          transition: opacity 0.3s ease-in-out;
        }
        h2 {
          font-size: 30px;
          color: ${Colors.WHITE};
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          margin: 0px;
          text-transform: capitalize;
        }
        img:hover {
          opacity: 0.3;
        }
        :global(.projectcard-link):hover {
          transform: scale(1.1, 1.1);
        }
      `}</style>
    </Link>
  );
};

export default ProjectCard;
