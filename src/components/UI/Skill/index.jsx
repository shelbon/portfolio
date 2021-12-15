import { Icon } from "@iconify/react";
import React from "react";
import { container, title } from "./skill.module.css";
const Skill = ({ language }) => {
  return (
    <div className={container}>
      <Icon icon={`simple-icons:${language}`} fontSize="32" color="#696969" />
      <p className={title}>{language}</p>
    </div>
  );
};
export default Skill;
