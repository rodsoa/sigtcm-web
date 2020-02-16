/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Link } from 'react-router-dom';
import { Container, ListButtons } from './styles';
import Button from '~/components/Button';
import DefaultLayout from '~/components/DefaultLayout';
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
      />
    </div>
  );

  return (
    <DefaultLayout
      headerTitle="Menu Principal"
      footerLeftTitle="Trocar de usuário"
      footerLeftLink="/"
      footerCenterTitle="Novo usuário"
      footerCenterLink="/signup"
      footerRightTitle="Sair"
      footerRightLink="/"
    >
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
                  disabled={el.firstBt.disabledButton}
                  // style={{ margin: 16, height: 100, width: '100%', borderWidth: 0 }}
                />
                <Button
                  whiteButton
                  title={el.secondBt.title}
                  height={100}
                  width="100%"
                  disabled={el.secondBt.disabledButton}
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
    </DefaultLayout>
  );
}
