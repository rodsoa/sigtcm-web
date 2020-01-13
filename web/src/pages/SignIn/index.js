/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { Container, MainLogin, FooterLogin } from './styles';
import Background from '../../components/Background/Background';
import { TCMView } from '../../styles';
import logo from '../../assets/logo.png';

export default function SignIn() {
  const renderLogin = () => (
    <Container>
      <TCMView mVertical={32} display="flex">
        <img style={{ height: 128 }} src={logo} />
      </TCMView>
      <MainLogin>
        <Form>
          <TCMView display="flex" column>
            <Input name="email" type="email" placeholder="Login...." />
            <Input name="password" type="password" placeholder="Senha...." />
          </TCMView>
        </Form>
      </MainLogin>
      <FooterLogin>
        <button type="button">Entrar</button>
        <TCMView display="flex" row justify="space-between" width="100%">
          <Link href="#">Esqueci minha senha</Link>
          <Link href="#">Cadastre-se</Link>
        </TCMView>
      </FooterLogin>
    </Container>
  );

  return <Background>{renderLogin()}</Background>;
}
