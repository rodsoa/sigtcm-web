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

export default function ProfileMatrix() {
  const addNewTreatment = () => {
    history.push('/newtreatment');
  };

  const renderButtons = () => (
    <div className="Buttons">
      <Button height={64} onClick={addNewTreatment} title="Adicionar +" />
      <Button height={64} onClick={addNewTreatment} title="Relatórios" />
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
            <th>
              <strong>ID</strong>
            </th>
            <th>
              <strong>Matriz</strong>
            </th>
            <th>
              <strong>Início</strong>
            </th>
            <th>
              <strong>UN.</strong>
            </th>
            <th>
              <strong>UN. Ativas</strong>
            </th>
            <th>
              <strong>Faturamento/mês</strong>
            </th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0001</td>
            <td>Nome Matriz</td>
            <td>04/12/2019</td>
            <td>25</td>
            <td>12</td>
            <td>R$ 125.540,00</td>
            <td>
              <button type="button">Editar</button>
              <button type="button">Excluir</button>
              <button type="button">UN</button>
            </td>
          </tr>
          <tr>
            <td>0001</td>
            <td>Nome Matriz</td>
            <td>04/12/2019</td>
            <td>25</td>
            <td>12</td>
            <td>R$ 125.540,00</td>
            <td>
              <button type="button">Editar</button>
              <button type="button">Excluir</button>
              <button type="button">UN</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <Background>
      <Shadow>
        <Header title="Perfil Matriz" />
        <Container>
          {renderButtons()}
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
