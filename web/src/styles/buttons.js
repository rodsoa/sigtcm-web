import styled from 'styled-components';

export const TCMButton = styled.TouchableOpacity(({ ...props }) => ({
  backgroundColor: props.bgColors(
    props.kind,
    props.category,
    props.loading,
    props.disabled
  ),
  paddingVertical: props.noPadding ? 0 : props.pad || 10,
  borderRadius: props.bdRadius !== 4 ? props.bdRadius : 4,
  height: props.height || 40,
  alignItems: props.centerText && 'center',
  justifyContent: props.centerText && 'center',
  borderColor: props.bdColors(props.kind, props.category),
  borderWidth: 1,
}));
