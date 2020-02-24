import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import { TCMView } from '~/styles';
import DefaultLayout from '~/components/DefaultLayout';

export default function NewEmployee() {
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
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="birthday" type="text" placeholder="Data de Nascimento" />
        <Input name="cpf" type="text" placeholder="CPF" />
        <Input name="rg" type="text" placeholder="RG" />
        <Input name="address" type="text" placeholder="Endereço" />
        <Input name="cep" type="text" placeholder="CEP" />
        <Input name="phone" type="text" placeholder="Fone" />
        <Input name="email" type="text" placeholder="E-mail" />
      </Form>
    </div>
  );

  return (
    <DefaultLayout
      headerTitle="Novo Funcionário"
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
      </Container>
    </DefaultLayout>
  );
}
