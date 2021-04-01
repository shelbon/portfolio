import React from "react"
import Skill from "../Skill/skill"
import PropTypes from "prop-types"
import {skillsPanel} from "./skillsPanel.module.css"
const SkillsPanel = ({ skills }) => (
  <div className={skillsPanel}>
    {skills.map(skill => (
      <Skill  name={skill} />
    ))}
  </div>
)
SkillsPanel.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
}
export default SkillsPanel
