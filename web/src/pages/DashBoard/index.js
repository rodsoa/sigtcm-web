/* eslint-disable jsx-a11y/anchor-is-valid */
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

export default function DashBoard() {
  const handleButtonService = () => {
    history.push('/service');
  };

  const handleButtonList = route => {
    history.push(`/${String(route).toLowerCase()}`);
  };

  const renderButtonService = () => (
    <div>
      <Button
        whiteButton
        title="Atendimento"
        height={100}
        margin={16}
        onClick={handleButtonService}
        // style={{ margin: 16, height: 100, width: '100%', borderWidth: 0 }}
      />
    </div>
  );

  return (
    <Background>
      <Shadow>
        <Header title="Menu Principal" />
        <Container>
          {renderButtonService()}
          <ListButtons>
            {dashboardOptions.map(el => (
              <li key={String(el.id)}>
                <div className="rowTwoButtons">
                  <Button
                    whiteButton
                    title={el.firstBt.title}
                    height={100}
                    width="100%"
                    onClick={() => handleButtonList(el.firstBt.route)}
                    // style={{ margin: 16, height: 100, width: '100%', borderWidth: 0 }}
                  />
                  <Button
                    whiteButton
                    title={el.secondBt.title}
                    height={100}
                    width="100%"
                    onClick={() => handleButtonList(el.secondBt.route)}
                    // style={{ margin: 16, height: 100, width: '100%', borderWidth: 0 }}
                  />
                </div>
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
