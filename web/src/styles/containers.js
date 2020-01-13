/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { calculateAbsolute, calculateMargin, calculatePadding } from './utils';

export const TCMView = styled.div(props => ({
  display: props.display || 'flex',
  flex: props.flex || 0,
  flexDirection:
    (props.display === 'flex' && props.row && 'row') ||
    (props.display === 'flex' && props.column && 'column'),

  justifyContent:
    (props.display === 'flex' && props.justify) ||
    (props.display === 'flex' && 'flex-start'),
  alignItems:
    (props.display === 'flex' && props.align) ||
    (props.display === 'flex' && 'stretch'),
  alignSelf: props.self || null,
  position: props.absolute ? 'absolute' : 'relative',
  borderWidth: props.bdWidth || 0,
  borderRadius: props.bdRadius || 0,
  borderColor: props.bdColor || null,
  borderBottomWidth: props.bdBottom || null,
  backgroundColor: props.bgColor || 'transparent',
  minHeight: props.minHeight || null,
  maxHeight: props.maxHeight || null,
  width: props.width || null,
  height: props.height || null,
  ...calculatePadding(props),
  ...calculateMargin(props),
  ...calculateAbsolute(props),
}));
