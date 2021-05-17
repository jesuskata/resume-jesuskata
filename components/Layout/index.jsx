// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => (
  <>
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
};
