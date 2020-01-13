export const calculatePadding = ({
  padTop,
  padBottom,
  padLeft,
  padRight,
  padHorizontal,
  padVertical,
  pad,
}) => ({
  paddingTop: pad || padVertical || padTop || 0,
  paddingBottom: pad || padVertical || padBottom || 0,
  paddingLeft: pad || padHorizontal || padLeft || 0,
  paddingRight: pad || padHorizontal || padRight || 0,
});

export const calculateMargin = ({
  mTop,
  mBottom,
  mLeft,
  mRight,
  mHorizontal,
  mVertical,
  margin,
}) => ({
  marginTop: margin || mVertical || mTop || 0,
  marginBottom: margin || mVertical || mBottom || 0,
  marginLeft: margin || mHorizontal || mLeft || 0,
  marginRight: margin || mHorizontal || mRight || 0,
});

export const calculateAbsolute = ({
  absTop,
  absBottom,
  absLeft,
  absRight,
}) => ({
  top: absTop || null,
  bottom: absBottom || null,
  left: absLeft || null,
  right: absRight || null,
});
