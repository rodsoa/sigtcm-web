/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import history from '~/services/history';

import { Container, MainLogin } from './styles';
import Background from '~/components/Background';
import Button from '~/components/Button';
import Footer from '~/components/Footer';
import { TCMView } from '~/styles';
import logo from '~/assets/logo.png';

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    history.push(`/dashboard`);
  };

  const renderLogin = () => (
    <Container>
      <TCMView mVertical={32} display="flex">
        <img style={{ height: 180 }} src={logo} />
      </TCMView>
      <MainLogin>
        <Form>
          <TCMView display="flex" column>
            <Input name="email" type="email" placeholder="Login...." />
            <Input name="password" type="password" placeholder="Senha...." />
          </TCMView>
        </Form>
      </MainLogin>
      <Footer>
        <>
          <TCMView mVertical={8} width="100%">
            <Button title="Entrar" onClick={handleClick} loading={loading} />
          </TCMView>
          <TCMView display="flex" row justify="space-between" width="100%">
            <Link href="#">Esqueci minha senha</Link>
            <Link href="#">Cadastre-se</Link>
          </TCMView>
        </>
      </Footer>
    </Container>
  );

  return <Background notHeader>{renderLogin()}</Background>;
}
