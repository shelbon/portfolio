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
    <section className={techContainer}>
      {techs.map((tech) => (
        <span className={tech__tag} key={tech}>
          <Icon icon={caretRight} />
          {tech}
        </span>
      ))}
    </section>
  );
};

TechList.propTypes = {
  techs: PropTypes.array.isRequired,
};

export default TechList;
