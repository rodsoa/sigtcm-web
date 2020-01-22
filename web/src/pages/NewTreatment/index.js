import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Container, Shadow } from './styles';
import Button from '~/components/Button';
import Background from '~/components/Background';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { TCMView } from '~/styles';

export default function NewTreatment() {
  const renderButtonAdd = () => <Button height={64} title="Adicionar +" />;

  const renderCod = () => (
    <div className="renderCod">
      <TCMView
        padHorizontal={16}
        display="flex"
        row
        align="center"
        justify="space-between"
        width="100%"
      >
        <span>
          Código: <strong>0007</strong>
        </span>
        <form>
          Desativar <input type="checkbox" />
        </form>
      </TCMView>
    </div>
  );

  const renderInputsTitleAndPrice = () => (
    <div className="Inputs">
      <Form>
        <Input name="title" type="text" placeholder="Título" />
        <Input name="price" type="text" placeholder="Preço Base" />
      </Form>
    </div>
  );

  const renderTableTreatments = () => (
    <div className="table">
      <div>
        <span>Áreas/Pacotes</span>
        <Link to="/">Adicionar +</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Área</th>
            <th>Qtde.</th>
            <th>R$</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>Fotodepilação</td>
            <td>Faixa de Barba</td>
            <td>Avulsa</td>
            <td>80,00</td>
          </tr>
          <tr>
            <td>002</td>
            <td>Fotodepilação</td>
            <td>Faixa de Barba</td>
            <td>Avulsa</td>
            <td>80,00</td>
          </tr>
          <tr>
            <td>003</td>
            <td>Fotodepilação</td>
            <td>Faixa de Barba</td>
            <td>Avulsa</td>
            <td>80,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <Background>
      <Shadow>
        <Header title="Novo Tratamento" />
        <Container>
          {renderCod()}
          {renderInputsTitleAndPrice()}
          {renderTableTreatments()}
        </Container>
        <Footer>
          <TCMView
            padVertical={8}
            display="flex"
            width="100%"
            row
            align="center"
          >
            {renderButtonAdd()}
          </TCMView>
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
