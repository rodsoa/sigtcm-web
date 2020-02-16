import React from 'react';

import { Container } from './styles';
import { terms } from './loremIpsum';
import DefaultLayout from '~/components/DefaultLayout';

export default function Terms() {
  return (
    <DefaultLayout footerLeftTitle="Voltar" footerLeftLink="/dashboard">
      <span style={{ marginBottom: 8, alignSelf: 'flex-start', fontSize: 24 }}>
        Termos e Condições:
      </span>
      <Container>
        <p>{terms}</p>
      </Container>
    </DefaultLayout>
  );
}
