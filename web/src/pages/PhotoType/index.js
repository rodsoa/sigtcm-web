import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Shadow, ListButtons } from './styles';
import Button from '~/components/Button';
import Background from '~/components/Background';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { TCMView } from '~/styles';
import { dashboardOptions } from '~/utils/DashBoardOptions';
import history from '~/services/history';

export default function PhotoType() {
  return (
    <Background>
      <Shadow>
        <Header title="Menu Principal" />
        <Container>
          <ListButtons>
            {dashboardOptions.map(el => (
              <li key={String(el.id)}>
                <div className="rowTwoButtons" />
              </li>
            ))}
          </ListButtons>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              margin: 0,
            }}
          >
            <Link
              to="/suggestions"
              style={{
                fontSize: 24,
                alignSelf: 'flex-end',
              }}
            >
              Sugestôes
            </Link>
          </div>
        </Container>
        <Footer>
          <TCMView
            display="flex"
            width="100%"
            row
            align="center"
            justify="space-between"
          >
            <Link to="#">Trocar de usuário</Link>
            <Link to="/signup">Novo usuário</Link>
            <Link to="#">Sair</Link>
          </TCMView>
        </Footer>
      </Shadow>
    </Background>
  );
}
