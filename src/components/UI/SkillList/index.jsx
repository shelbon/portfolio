import React from "react";
import Skill from "../Skill";
import { item, list } from "./skillList.module.css";

const SkillList = ({ languages }) => {
  return (
    <ul className={list}>
      {languages.map((language) => (
        <li
          className={item}
          key={`${language}#${Math.floor(Math.random() * 9999)}`}
        >
          <Skill language={language} />
        </li>
      ))}
    </ul>
  );
};
export default SkillList;
