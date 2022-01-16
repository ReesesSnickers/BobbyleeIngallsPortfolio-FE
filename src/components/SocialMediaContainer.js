import React, { useState, useEffect } from 'react';
import URLs from '../utility/constants/urls';
import NavMenuIconButton from './buttons/NavMenuIconButton';
import Colors from '../utility/constants/colors';
import Feature from '../utility/featureConfig';
import {
  faCodepen,
  faFacebookSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const SocialMediaContainer = ({ closeMenu }) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [showCodePen, setShowCodePen] = useState(false);
  const [showLinkedIn, setShowLinkedIn] = useState(false);
  const [showFacebook, setShowFacebook] = useState(false);
  const showSocialMediaSection = showCodePen || showLinkedIn || showFacebook;

  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    // UE handles when the social media buttons should show in the menu
    if (dimensions.width < 644) {
      setShowCodePen(true);
    } else {
      setShowCodePen(false);
    }

    if (dimensions.width < 563) {
      setShowLinkedIn(true);
    } else {
      setShowLinkedIn(false);
    }

    if (dimensions.width < 484) {
      setShowFacebook(true);
    } else {
      setShowFacebook(false);
    }
  }, [dimensions]);

  useEffect(() => {
    // UE for handling windows events
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {showSocialMediaSection ? (
        <section className="social-media-sources">
          <ul>
            {showFacebook && Feature.showFacebookMediaButton ? (
              <li onClick={() => closeMenu()}>
                <NavMenuIconButton
                  href={URLs.FACEBOOK}
                  ariaLabel="Facebook Profile"
                  icon={faFacebookSquare}
                />
              </li>
            ) : null}
            {showLinkedIn && Feature.showLinkedInMediaButton ? (
              <li onClick={() => closeMenu()}>
                <NavMenuIconButton
                  href={URLs.LINKEDIN}
                  ariaLabel="LinkedIn Profile"
                  icon={faLinkedin}
                />
              </li>
            ) : null}
            {showCodePen && Feature.showCodepenMediaButton ? (
              <li onClick={() => closeMenu()}>
                <NavMenuIconButton
                  href={URLs.CODEPEN}
                  ariaLabel="Codepen Profile"
                  icon={faCodepen}
                />
              </li>
            ) : null}
          </ul>
          <style jsx>{`
            section {
              padding: 10px;
            }

            .social-media-sources ul {
              padding: 0px;
              margin: 0px;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-orient: horizontal;
              -webkit-box-direction: normal;
              -ms-flex-direction: row;
              flex-direction: row;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              justify-content: center;
            }

            .social-media-sources li :global(svg path) {
              fill: ${Colors.WHITE};
            }
            .social-media-sources li:hover :global(svg path) {
              fill: ${Colors.BRIGHT_GREEN};
            }
          `}</style>
        </section>
      ) : null}
    </>
  );
};

export default SocialMediaContainer;
