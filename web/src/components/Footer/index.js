import PropTypes from 'prop-types';
import React from 'react';

import { TCMFooter } from './styles';

export default function Footer({ children }) {
  return <TCMFooter>{children}</TCMFooter>;
}

Footer.propTypes = {
  children: PropTypes.element.isRequired,
};
