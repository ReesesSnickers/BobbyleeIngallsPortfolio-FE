import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import AvatarText from "./AvatarText";

const StyledAvatar = ({ src, alt, border, name, title, customClassName }) => {
  return (
    <section
      className={`wrapper${
        customClassName ? ` ${customClassName}-wrapper` : ""
      }`}
    >
      <Avatar className={customClassName} alt={alt} src={src} />
      <AvatarText
        customClassName={customClassName ? `${customClassName}-text` : ""}
        primary={name}
        secondary={title}
      />
      <style jsx>
        {`
          section.wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          :global(.MuiAvatar-root) {
            width: 400px;
            height: 400px;
            border-radius: 50%;
            overflow: hidden;
            border: ${border ? "1px solid #0e1a3c;" : "none;"};
          }
          @media screen and (max-width: 930px) {
            :global(.MuiAvatar-root) {
              width: 250px;
              height: 250px;
            }
          }
          @media screen and (max-width: 400px) {
            :global(.MuiAvatar-root) {
              width: 200px;
              height: 200px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default StyledAvatar;

StyledAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  border: PropTypes.bool,
  name: PropTypes.string,
  title: PropTypes.string,
  customClassName: PropTypes.string,
};

StyledAvatar.defaultProps = {
  alt: "Profile Photo",
  border: false,
  customClassName: "",
};
