import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

const addAccessibilityTitle = (title, key) => {
  const icon = document.getElementsByClassName(`icon-${key}`)[0];
  const titleElem = document.createElement("title");
  const paragraph = document.createTextNode(title);
  titleElem.appendChild(paragraph);
  icon.insertBefore(titleElem, icon.childNodes[0]);
};

const AccessibleIcon = ({
  icon,
  title,
  description,
  className,
  roles,
  identifiant,
}) => {
  useEffect(() => {
    addAccessibilityTitle(title, identifiant);
  }, [title, identifiant]);

  return (
    <Icon
      icon={icon}
      className={`icon-${identifiant} ${className}`}
      roles={roles}
    />
  );
};

AccessibleIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  identifiant: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
  roles: PropTypes.string,
};
AccessibleIcon.defaultProps = {
  description: "",
  className: "",
  roles: "",
};
export default AccessibleIcon;
