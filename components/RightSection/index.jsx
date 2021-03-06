// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import { RightSectionStyled } from './styles';
import { Projects } from '../Projects';
import { Experience } from '../Experience';
import { Education } from '../Education';
import { Footer } from '../Footer';

export const RitghSection = ({ resumeInfo }) => {
  const {
    data: {
      projects, experience, education, footer
    }
  } = resumeInfo;
  return (
    <RightSectionStyled className="splitright">
      <Projects projects={projects} />
      <Experience experience={experience} />
      <Education education={education} />
      <Footer footer={footer} />
    </RightSectionStyled>
  );
};

RitghSection.propTypes = {
  resumeInfo: PropTypes.objectOf(PropTypes.any),
};
