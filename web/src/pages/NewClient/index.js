import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Container, Shadow } from './styles';
import Button from '~/components/Button';
import Background from '~/components/Background';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { TCMView } from '~/styles';

export default function NewClient() {
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
    <Background>
      <Shadow>
        <Header title="Novo Cliente" />
        <Container>
          {renderCod()}
          {renderInputs()}
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
