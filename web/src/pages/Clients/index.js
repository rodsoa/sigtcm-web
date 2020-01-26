import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Container, Shadow } from './styles';
import Button from '~/components/Button';
import Background from '~/components/Background';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { TCMView } from '~/styles';
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
    <Background>
      <Shadow>
        <Header title="Clientes" />
        <Container>
          {renderButtonAdd()}
          {renderSearch()}
          {renderTableTreatments()}
        </Container>
        <Footer>
          <TCMView
            display="flex"
            width="100%"
            row
            align="center"
            justify="space-between"
          >
            <Link to="/dashboard">Voltar</Link>
            <Link to="/">Sair</Link>
          </TCMView>
        </Footer>
      </Shadow>
    </Background>
  );
}
