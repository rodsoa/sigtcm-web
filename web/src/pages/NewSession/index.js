import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Form, Input } from '@rocketseat/unform';
import { Container, Shadow } from './styles';
import Button from '~/components/Button';
import Background from '~/components/Background';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { TCMView } from '~/styles';

export default function NewSession() {
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

  const renderDropDownSelect = () => (
    <div className="dropdow">
      <TCMView display="flex" row align="center" justify="space-between">
        <button type="button">
          Clientes{' '}
          <div>
            <i
              className="fa fa-sort-desc"
              style={{ fontSize: 40, textShadow: 1, color: '#fff' }}
            />
          </div>
        </button>
        <TCMView width="100%" mLeft={4}>
          <button type="button" className="search">
            <i
              className="fa fa-search"
              style={{ fontSize: 40, textShadow: 1, color: '#444' }}
            />
          </button>
        </TCMView>
      </TCMView>
      <div className="listDropDow">
        <ul>
          <li>
            <button onClick={() => {}} type="button">
              001 - Ademir Barbosa
            </button>
          </li>
          <li>
            <button onClick={() => {}} type="button">
              002 - Adilson dos Santos
            </button>
          </li>
          <li>
            <button onClick={() => {}} type="button">
              003 - Bernardo Soares
            </button>
          </li>
        </ul>
      </div>
    </div>
  );

  const renderCodToCNPJ = () => (
    <div className="labels">
      <span>
        Cód.: <strong>{employee.cod}</strong>
      </span>
      <span>
        Nome: <strong>{employee.name}</strong>
      </span>
      <span>
        CPF: <strong>{employee.cpf}</strong>
      </span>
    </div>
  );

  const renderSearch = () => (
    <div className="search">
      <strong>PACOTES</strong>
    </div>
  );

  const renderTableContacts = () => (
    <div className="tableContacts">
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Área</th>
            <th>Qtde.</th>
            <th>R$</th>
          </tr>
        </thead>
        <tbody>
          {employeeReport.map(el => (
            <tr key={el.id}>
              <td>{format(new Date(el.date), 'dd/MM/yyyy')}</td>
              <td>{el.name}</td>
              <td>{el.field}</td>
              <td>{el.Procedure}</td>
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
        <Header title="Nova Sessão" />
        <Container>
          {renderDropDownSelect()}

          <TCMView className="renderLabels" flex={1} row>
            {renderCodToCNPJ()}
          </TCMView>
          {renderSearch()}
          {renderTableContacts()}

          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              margin: 0,
            }}
          >
            <Link
              to="/suggestions"
              style={{
                fontSize: 24,
                alignSelf: 'flex-end',
              }}
            >
              + Nova Venda
            </Link>
          </div>
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
            <Link to="#">Voltar</Link>
            <Link to="#">Trocar de usuário</Link>
            <Link to="/dashboard">Cancelar</Link>
          </TCMView>
        </Footer>
      </Shadow>
    </Background>
  );
}
