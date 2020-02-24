import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import Button from '~/components/Button';
import DefaultLayout from '~/components/DefaultLayout';
import history from '~/services/history';

export default function Clients() {
  const addNewTreatment = () => {
    history.push('/newtreatment');
  };

  const renderButtonAdd = () => (
    <div className="Add">
      <Button height={64} onClick={addNewTreatment} title="Adicionar +" />
    </div>
  );

  const renderSearch = () => (
    <div className="search">
      <Form>
        <Input name="search" type="text" placeholder="Buscar...." />
      </Form>
    </div>
  );

  const renderTableTreatments = () => (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Cód</th>
            <th>Título</th>
            <th>Preço base</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0001</td>
            <td>Fotodepilação</td>
            <td>80,00</td>
            <td>
              <button type="button">Editar</button>
              <button type="button">Excluir</button>
              <button type="button">Pacotes</button>
            </td>
          </tr>
          <tr>
            <td>0001</td>
            <td>Fotodepilação</td>
            <td>80,00</td>
            <td>
              <button type="button">Editar</button>
              <button type="button">Excluir</button>
              <button type="button">Pacotes</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <DefaultLayout
      headerTitle="Clientes"
      footerLeftTitle="Voltar"
      footerLeftLink="/dashboard"
      footerRightTitle="Sair"
      footerRightLink="/"
    >
      <Container>
        {renderButtonAdd()}
        {renderSearch()}
        {renderTableTreatments()}
      </Container>
    </DefaultLayout>
  );
}
