/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import history from '~/services/history';

import { Container, MainLogin } from './styles';
import Background from '~/components/Background';
import Button from '~/components/Button';
import Footer from '~/components/Footer';
import { TCMView } from '~/styles';
import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

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
      <Form schema={schema} onSubmit={handleClick}>
        <MainLogin>
          <TCMView width="100%" display="flex" column>
            <Input name="email" type="email" placeholder="Login...." />
            <Input name="password" type="password" placeholder="Senha...." />
          </TCMView>
        </MainLogin>
        <Footer>
          <>
            <TCMView mVertical={8} width="100%">
              <Button type="submit" title="Entrar" loading={loading} />
            </TCMView>
            <TCMView display="flex" row justify="space-between" width="100%">
              <Link href="#">Esqueci minha senha</Link>
              <Link to="/signup">Cadastre-se</Link>
            </TCMView>
          </>
        </Footer>
      </Form>
    </Container>
  );

  return <Background notHeader>{renderLogin()}</Background>;
}
