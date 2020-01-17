import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Shadow, ListButtons } from './styles';
import { dashboardOptions } from '~/utils/DashBoardOptions';
import Button from '~/components/Button';
import Background from '~/components/Background';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { TCMView } from '~/styles';

export default function DashBoard() {
  return (
    <Background>
      <Shadow style={{}}>
        <Header title="Menu Principal" />
        <Container>
          <div>
            <Button
              whiteButton
              title="Atendimento"
              height={100}
              margin={16}
              // style={{ margin: 16, height: 100, width: '100%', borderWidth: 0 }}
            />
          </div>
          <ListButtons style={{ width: '100%' }}>
            {dashboardOptions.map(el => (
              <li
                style={{ margin: 16, height: 100, width: '30%' }}
                key={String(el.name)}
              >
                <Button whiteButton title={el.title} />
              </li>
            ))}
          </ListButtons>
        </Container>
        <Footer>
          <TCMView
            display="flex"
            width="100%"
            row
            align="center"
            justify="space-between"
          >
            <Link to="#" style={{ fontWeight: 'bold' }}>
              Trocar de usuário
            </Link>
            <Link to="#" style={{ fontWeight: 'bold' }}>
              Novo usuário
            </Link>
            <Link to="#" style={{ fontWeight: 'bold' }}>
              Sair
            </Link>
          </TCMView>
        </Footer>
      </Shadow>
    </Background>
  );
}
