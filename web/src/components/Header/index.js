import React from 'react';

import { TCMHeader } from './styles';
import { TCMView } from '~/styles';
import logo from '~/assets/logo.png';

export default function Header({ title }) {
  const renderHeader = () => (
    <TCMHeader>
      <img alt="logo" style={{ height: 64 }} src={logo} />
      <TCMView
        align="center"
        justify="center"
        display="flex"
        flex={1}
        width="100%"
      >
        <h1>{title}</h1>
      </TCMView>
      <TCMView width={50} pad={32} height={64} />
    </TCMHeader>
  );

  return renderHeader();
}
