import React from 'react';

import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Form, Input } from '@rocketseat/unform';
import { Container, Shadow } from './styles';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { TCMView } from '~/styles';
// import history from '~/services/history';

export default function ProfileClient() {
  const employee = {
    cod: '0001',
    start: '2019/09/04',
    name: 'Roberto Silva',
    birthday: '1994/08/15',
    cpf: '00012345687',
    rg: 527895460,
    address: 'Rua 25 de março, 264 - São Paulo',
    district: 'Centro',
    cep: 14527254,
    city: 'São Paulo',
    uf: 'SP',
    phone: 1148259986,
    email: 'name@mail.com',
    matrix: 'Nome Matriz',
    codMatrix: '0005',
    unit: 'Nome Unidade',
    codUnit: '0002',
  };

  const employeeReport = [
    {
      id: 1,
      date: '2019/09/04',
      name: 'João Silva',
      Procedure: 'Foto Preenchimento de Barba',
      field: 'Faixa de Barba',
      value: 120.55,
    },
    {
      id: 2,
      date: '2019/09/04',
      name: 'João Silva',
      Procedure: 'Foto Preenchimento de Barba',
      field: 'Faixa de Barba',
      value: 120.75,
    },
    {
      id: 3,
      date: '2019/09/04',
      name: 'João Silva',
      Procedure: 'Foto Preenchimento de Barba',
      field: 'Faixa de Barba',
      value: 120.25,
    },
  ];

  const renderCheckBox = () => (
    <>
      <TCMView
        padHorizontal={16}
        padVertical={8}
        display="flex"
        column
        align="center"
        width="100%"
      >
        <form style={{ alignSelf: 'flex-end' }}>
          Desativar <input type="checkbox" />
        </form>
      </TCMView>
    </>
  );

  const renderCodToCNPJ = () => (
    <div className="labels">
      <span>
        Cód.: <strong>{employee.cod}</strong>
      </span>
      <span>
        Início:{' '}
        <strong>{format(new Date(employee.start), 'dd/MM/yyyy')}</strong>
      </span>
      <span>
        Nome: <strong>{employee.name}</strong>
      </span>
      <span>
        Data de nasc.:{' '}
        <strong>{format(new Date(employee.birthday), 'dd/MM/yyyy')}</strong>
      </span>
      <span>
        CPF: <strong>{employee.cpf}</strong>
      </span>
    </div>
  );
  const renderAddressToPhone = () => (
    <div className="labels">
      <span>
        Endereço: <strong>{employee.address}</strong>
      </span>
      <TCMView>
        <span>
          Bairro: <strong>{employee.district}</strong>
        </span>
        <span>
          CEP: <strong>{employee.cep}</strong>
        </span>
      </TCMView>
      <span>
        Cidade/UF: <strong>{`${employee.city}/${employee.uf}`}</strong>
      </span>
      <span>
        Fone: <strong>{employee.phone}</strong>
      </span>
      <span>
        E-mail: <strong>{employee.email}</strong>
      </span>
    </div>
  );

  const renderDescription = () => (
    <div className="description">
      <TCMView
        display="flex"
        width="100%"
        padRight={16}
        row
        justify="space-between"
      >
        <div>
          <button type="button">Fototipo</button>
          <button type="button">Galeria de Fotos</button>
        </div>
        <button type="button">Cam</button>
      </TCMView>
      <Form>
        <Input
          name="description"
          type="text"
          multiline
          placeholder="Observações"
        />
      </Form>
    </div>
  );

  const renderSearch = () => (
    <div className="search">
      <strong>PROCEDIMENTOS</strong>
      <Form>
        <Input name="search" type="text" placeholder="Buscar...." />
      </Form>
    </div>
  );

  const renderTableContacts = () => (
    <div className="tableContacts">
      <div>
        <TCMView row align="center" justify="space-between">
          <Link to="/">Adicionar +</Link>
          <Link to="/">Editar</Link>
          <Link to="/">Excluir</Link>
        </TCMView>
        <span>
          <Link to="/">Relatórios</Link>
        </span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Cliente</th>
            <th>Procedimento</th>
            <th>Área</th>
            <th>R$</th>
          </tr>
        </thead>
        <tbody>
          {employeeReport.map(el => (
            <tr key={el.id}>
              <td>{format(new Date(el.date), 'dd/MM/yyyy')}</td>
              <td>{el.name}</td>
              <td>{el.Procedure}</td>
              <td>{el.field}</td>
              <td>{String(el.value).replace('.', ',')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <Background>
      <Shadow>
        <Header title="Perfil Cliente" />
        <Container>
          {renderCheckBox()}
          <TCMView className="renderLabels" flex={1} row>
            {renderCodToCNPJ()}
            {renderAddressToPhone()}
          </TCMView>
          {renderDescription()}
          {renderSearch()}
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
