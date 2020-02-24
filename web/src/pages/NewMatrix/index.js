import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import { TCMView } from '~/styles';
import DefaultLayout from '~/components/DefaultLayout';

export default function NewMatrix() {
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
    <DefaultLayout
      headerTitle="Nova Matriz"
      footerButtonTitle="Adicionar +"
      footerButtonAction={() => {}}
      footerLeftTitle="Voltar"
      footerLeftLink="/dashboard"
      footerRightTitle="Sair"
      footerRightLink="/"
    >
      <Container>
        {renderCod()}
        {renderInputs()}
        {renderTableTreatments()}
      </Container>
    </DefaultLayout>
  );
}
