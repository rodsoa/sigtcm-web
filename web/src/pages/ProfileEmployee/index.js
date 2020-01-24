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

export default function ProfileEmployee() {
  const addNewTreatment = () => {
    history.push('/newtreatment');
  };
  const renderCheckBox = () => (
    <TCMView
      padHorizontal={16}
      padVertical={8}
      display="flex"
      row
      align="center"
      justify="space-between"
      width="100%"
      bgColor="#fff"
    >
      <TCMView
        display="flex"
        row
        flex={1}
        align="center"
        justify="space-between"
      >
        <span style={{ width: '50%', color: '#3d5ba8' }}>
          Nome:
          <strong> Nome da Matriz</strong>
        </span>
        <span style={{ width: '50%', color: '#3d5ba8' }}>
          Cód:
          <strong> 0007</strong>
        </span>
      </TCMView>
      <form>
        Desativar <input type="checkbox" />
      </form>
    </TCMView>
  );

  const renderCodToCNPJ = () => (
    <div className="labels">
      <span>
        Cód: <strong> 0000 </strong>
      </span>
      <span>
        Início: <strong>04/12/2019</strong>
      </span>
      <span>
        Razão Social: <strong>Nome da empresa</strong>
      </span>
      <span>
        CNPJ: <strong>00.000.000/0000-00</strong>
      </span>
    </div>
  );
  const renderAddressToPhone = () => (
    <div className="labels">
      <span>
        Endereço: <strong>Rua 25 de março, 264 - São Paulo</strong>
      </span>
      <TCMView>
        <span>
          Bairro: <strong>Centro</strong>
        </span>
        <span>
          CEP: <strong>00000-000</strong>
        </span>
      </TCMView>
      <span>
        Cidade/UF: <strong>São Paulo/SP</strong>
      </span>
      <span>
        Fone: <strong>(11) 0000-0000 / (00) 0000-0000</strong>
      </span>
    </div>
  );

  const renderTableContacts = () => (
    <div className="tableContacts">
      <div>
        <span>Contatos</span>
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
        <Header title="Perfil Unidade" />
        <Container>
          {renderCheckBox()}
          <TCMView className="renderLabels" flex={1} row>
            {renderCodToCNPJ()}
            {renderAddressToPhone()}
          </TCMView>
          {renderTableContacts()}
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
            <Link to="/">Editar</Link>
            <Link to="/">Sair</Link>
          </TCMView>
        </Footer>
      </Shadow>
    </Background>
  );
}
