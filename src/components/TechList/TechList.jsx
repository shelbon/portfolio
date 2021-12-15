import caretRight from "@iconify-icons/la/caret-right";
import PropTypes from "prop-types";
import React from "react";
import AccessibleIcon from "../UI/AccessibleIcon";
import { tech as techContainer, tech__tag } from "./tech-list.module.css";

const TechList = ({ techs }) => {
  return (
    <ul className={techContainer}>
      {techs.map((tech) => (
        <li className={tech__tag} key={tech}>
          <AccessibleIcon
            icon={caretRight}
            roles="graphics-symbol"
            title={`Right caret of technologie ${tech}`}
            identifiant={tech}
          />

          <span>{tech}</span>
        </li>
      ))}
    </ul>
  );
};

TechList.propTypes = {
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TechList;
