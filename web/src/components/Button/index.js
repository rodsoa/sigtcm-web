import PropTypes from 'prop-types';
import React from 'react';
import { TCMButton } from '~/styles/buttons';
import { Container } from './styles';

export default function Button({
  loading,
  disabled,
  title,
  whiteButton,
  onClick,
  height,
  type,
}) {
  const isDisabled = loading || disabled;

  return (
    <TCMButton
      height={height}
      onClick={onClick}
      whiteButton={whiteButton}
      disabled={isDisabled}
      type={type}
    >
      <Container>
        {loading && (
          <i className="fa fa-refresh fa-spin" style={{ marginRight: '5px' }} />
        )}
        <span className="titleButton">{title}</span>
      </Container>
    </TCMButton>
  );
}

Button.propTypes = {
  whiteButton: PropTypes.bool,
  loading: PropTypes.bool,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  height: PropTypes.number,
  type: PropTypes.string,
};

Button.defaultProps = {
  whiteButton: false,
  loading: false,
  title: '',
  disabled: false,
  onClick: () => {},
  height: 64,
  type: 'button',
};
