import caretRight from '@iconify/icons-la/caret-right';
import Icon from '@iconify/react';
import PropTypes from 'prop-types';
import React from 'react';
import {
  tech as techContainer,
  tech__tag
} from './tech-list.module.css';

const TechList = ({ techs }) => {
  return (
    <ul className={techContainer}>
      {techs.map((tech) => (
        <li className={tech__tag} key={tech}>
          <Icon
            icon={caretRight}
            aria-label={`technologie ${tech}`}
          />
          <p>{tech}</p>
        </li>
      ))}
    </ul>
  );
};

TechList.propTypes = {
  techs: PropTypes.array.isRequired,
};

export default TechList;
