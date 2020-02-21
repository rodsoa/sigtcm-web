import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Container, Shadow } from './styles';
import Button from '~/components/Button';
import Background from '~/components/Background';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { TCMView } from '~/styles';

export default function SignUp() {
  const [profile, setProfile] = useState('');
  const [showList, setShowList] = useState(false);
  const [animateDrop, setAnimateDrop] = useState(false);

  const handleSelectProfile = value => {
    console.log('OIA EU AQUI');
    setProfile(value);
  };

  const handleDropDow = () => {
    if (showList) {
      setAnimateDrop(false);
      setTimeout(() => {
        setShowList(false);
      }, 1400);
    } else {
      setShowList(true);
      setAnimateDrop(true);
    }
  };

  const renderListDropDown = () => (
    <div className="listDropDow">
      <ul>
        <li>
          <button onClick={() => handleSelectProfile('TCM')} type="button">
            Admin TCM
          </button>
        </li>
        <li>
          <button onClick={() => handleSelectProfile('Matriz')} type="button">
            Admin Matriz{' '}
          </button>
        </li>
        <li>
          <button onClick={() => handleSelectProfile('Unit')} type="button">
            Admin Unidade
          </button>
        </li>
      </ul>
    </div>
  );

  const renderDropDownSelect = () => (
    <div className="dropdow">
      <button type="button" onClick={handleDropDow}>
        Perfil{' '}
        <div style={{ paddingBottom: !showList ? 14 : 0 }}>
          {!showList ? (
            <i
              className="fa fa-sort-desc"
              style={{ fontSize: 40, textShadow: 1, color: '#fff' }}
            />
          ) : (
            <i
              className="fa fa-sort-up"
              style={{
                fontSize: 40,
                textShadow: 1,
                color: '#fff',
                marginTop: 16,
              }}
            />
          )}
        </div>
      </button>
      {!!showList && renderListDropDown()}
    </div>
  );

  const renderFormDataUser = () => (
    <Form>
      <TCMView display="flex" column>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="cpf" type="text" placeholder="CPF" />
        <Input name="tel" type="text" placeholder="Telefone" />
        <Input name="cel" type="text" placeholder="Celular" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />
      </TCMView>
    </Form>
  );

  console.log(profile);
  return (
    <Background>
      <Shadow>
        <Header title="Novo Usuário" />
        <Container showList={animateDrop}>
          {!profile && renderDropDownSelect()}
          {profile && renderFormDataUser()}
        </Container>
        <Footer>
          <TCMView mVertical={8} width="100%">
            <Button title="Cadastrar" height={50} />
          </TCMView>
          <TCMView
            display="flex"
            width="100%"
            row
            align="center"
            justify="space-between"
          >
            <Link to="#">Já sou cadastrado</Link>
            <Link to="/dashboard">Cancelar</Link>
          </TCMView>
        </Footer>
      </Shadow>
    </Background>
  );
}
