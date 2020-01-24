import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Container, Shadow } from './styles';
import Button from '~/components/Button';
import Background from '~/components/Background';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { TCMView } from '~/styles';

export default function NewMatrix() {
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
          ID: <strong>0007</strong>
        </span>
        <form>
          Desativar <input type="checkbox" />
        </form>
      </TCMView>
    </div>
  );

  const renderInputs = () => (
    <div className="Inputs">
      <Form>
        <Input
          name="razaoSocial"
          type="text"
          placeholder="Razão Social (Matriz)"
        />
        <Input name="cnpj" type="text" placeholder="CNPJ" />
        <Input name="address" type="text" placeholder="Endereço" />
        <Input name="cep" type="text" placeholder="CEP" />
        <Input name="phone" type="text" placeholder="Fone" />
        <Input name="email" type="text" placeholder="E-mail" />
      </Form>
    </div>
  );

  const renderTableTreatments = () => (
    <div className="table">
      <div>
        <span>Áreas/Pacotes</span>
        <TCMView row align="center" justify="space-between">
          <Link to="/">Adicionar +</Link>
          <Link to="/">Editar</Link>
          <Link to="/">Excluir</Link>
        </TCMView>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Fone</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>Fotodepilação</td>
            <td>Faixa de Barba</td>
            <td>Avulsa</td>
          </tr>
          <tr>
            <td>002</td>
            <td>Fotodepilação</td>
            <td>Faixa de Barba</td>
            <td>Avulsa</td>
          </tr>
          <tr>
            <td>003</td>
            <td>Fotodepilação</td>
            <td>Faixa de Barba</td>
            <td>Avulsa</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <Background>
      <Shadow>
        <Header title="Nova Matriz" />
        <Container>
          {renderCod()}
          {renderInputs()}
          {renderTableTreatments()}
        </Container>
        <Footer>
          <TCMView
            padVertical={8}
            display="flex"
            width="100%"
            row
            align="center"
            padHorizontal={32}
          >
            {renderButtonAdd()}
          </TCMView>
          <TCMView
            display="flex"
            width="100%"
            row
            align="center"
            justify="space-between"
            padHorizontal={32}
          >
            <Link to="/dashboard">Voltar</Link>
            <Link to="/">Sair</Link>
          </TCMView>
        </Footer>
      </Shadow>
    </Background>
  );
}
