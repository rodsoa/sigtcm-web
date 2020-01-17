import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { calculateMargin } from '~/styles/utils';

const bgColorButton = ({ ...props }) => {
  if (props.whiteButton) {
    return props.disabled ? darken('#fff') : '#fff';
  }
  return props.disabled ? lighten('#444') : '#444';
};

const defineColorText = ({ ...props }) => {
  if (props.whiteButton) {
    return '#444';
  }
  return '#fff';
};

export const TCMButton = styled.button(({ ...props }) => ({
  backgroundColor: bgColorButton(props),
  paddingVertical: props.noPadding ? 0 : props.pad || 10,
  borderRadius: props.bdRadius !== 4 ? props.bdRadius : 0,
  height: props.height || 44,
  width: props.width || '100%',
  alignItems: props.centerText && 'center',
  justifyContent: props.centerText && 'center',
  border: 'none',
  fontWeight: 'bold',
  color: defineColorText(props),
  ...calculateMargin(props),
}));
