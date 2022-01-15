import React from 'react';
import ExteralLink from '../../../components/buttons/ExternalLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Colors from '../../../utility/constants/colors';
import CSS from '../../../utility/constants/CSS';

const TechnologyCard = ({ technology }) => {
  const { name, documentation, icon } = technology;
  return (
    <ExteralLink to={documentation}>
      <div className="card">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h3>{name}</h3>
        <h4>View Doc's</h4>
        <style jsx>{`
          :global(.external-link) {
            color: ${Colors.WHITE};
            text-decoration: none;
          }
          .card {
            margin: 10px 10px;
            border-radius: ${CSS.CARD_BORDER_RADIUS};
            overflow: hidden;
            background-color: ${Colors.LIGHT_GREY};
            width: 200px;
            height: 133px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          h4 {
            position: absolute;
            bottom: 10px;
            left: -85px;
            margin: 0px;
            transform: translate(0, 0);
            transition: transform 1.3s ease-in-out, opacity 0.3s ease-in-out;
          }
          .icon-wrapper {
            font-size: 40px;
          }
          h4,
          h3,
          .icon-wrapper {
            opacity: 0.4;
          }
          .card:hover {
            color: ${Colors.BRIGHT_GREEN};
            transform: scale(1.1, 1.1);
          }
          .card:hover h4 {
            transform: translate(141px, 0);
          }
          .card:hover h3,
          .card:hover h4,
          .card:hover .icon-wrapper {
            opacity: 1;
          }
        `}</style>
      </div>
    </ExteralLink>
  );
};

export default TechnologyCard;
