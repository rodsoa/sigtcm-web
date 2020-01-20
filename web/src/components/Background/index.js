/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Background({ children, mTop }) {
  return <Container style={{ marginTop: mTop }}>{children}</Container>;
}

Background.propTypes = {
  children: PropTypes.element.isRequired,
  mTop: PropTypes.number,
};

Background.defaultProps = {
  mTop: 0,
};
