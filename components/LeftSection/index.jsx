// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { ProfilePicture } from '../ProfilePicture';
import { UserLogo } from '../UserLogo';

// Styled Components
import { LeftSectionStyled } from './styles';

export const LeftSection = ({ resumeInfo }) => {
  const { data: { logo, ...data } } = resumeInfo;
  return (
    <LeftSectionStyled className="splitleft">
      <UserLogo logo={logo} />
      <ProfilePicture data={data} />
    </LeftSectionStyled>
  );
};

LeftSection.propTypes = {
  resumeInfo: PropTypes.objectOf(PropTypes.any)
};
