import React from "react"
import PropTypes from "prop-types"
import {skill,skill__title} from "./skill.module.css"
const Skill = ({ name,className }) =><span className={skill}><p className={skill__title}>{name}</p></span>
 
Skill.propTypes = {
  name: PropTypes.string.isRequired,
}
export default Skill
