// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Resume } from '../Resume';

// Styled Components
import { GlobalStyles } from '../styles/GlobalStyles';

export const Page = ({ children }) => (
  <div>
    <GlobalStyles />
    <Resume>{children}</Resume>
  </div>
);

Page.propTypes = {
  children: PropTypes.node
};
