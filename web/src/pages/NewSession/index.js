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

  //   const renderButtonAdd = () => (
  //     <TCMView className="buttonAdd" width="100%">
  //       <Button title="Adicionar" />
  //     </TCMView>
  //   );

  const renderSearch = () => (
    <div className="search">
      <strong>PROCEDIMENTOS</strong>
      {/* <Form>
        <Input name="search" type="text" placeholder="Buscar...." />
      </Form> */}
    </div>
  );

  const renderTableContacts = () => (
    <div className="tableContacts">
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

  //   const renderCouponDesc = () => (
  //     <div className="couponDesc">
  //       <strong>Cupom de desconto: </strong>
  //       <Input type="text" name="couponDesc" />
  //     </div>
  //   );

  //   const renderDesc = () => (
  //     <div className="Desc">
  //       <strong>Desconto: </strong>
  //       <span>-R$</span>
  //       <Input type="text" name="Desc" />
  //       <span>%</span>
  //       <Input type="text" name="DescPorcent" />
  //     </div>
  //   );

  //   const renderFinalsData = () => (
  //     <div className="finalsData">
  //       <div>
  //         <strong>Cupom</strong>
  //         <span>-10%</span>
  //       </div>
  //       <div>
  //         <strong>Desconto</strong>
  //         <span>-R$ 150,00</span>
  //       </div>
  //       <div>
  //         <strong>Serviços</strong>
  //         <span>R$ 2790,00</span>
  //       </div>
  //     </div>
  //   );

  //   const renderTotal = () => (
  //     <div className="total">
  //       <strong>Total Final</strong>
  //       <div>
  //         <strong>R$ 2361,00</strong>
  //       </div>
  //     </div>
  //   );

  return (
    <Background>
      <Shadow>
        <Header title="Nova Sessão" />
        <Container>
          {renderDropDownSelect()}
          {/* {renderButtonAdd()} */}
          {renderSearch()}
          {renderTableContacts()}
          {/* <TCMView width="100%">
            <TCMView display="flex" flex={1} column>
              {renderCouponDesc()}
              {renderDesc()}
            </TCMView>
            {renderFinalsData()}
          </TCMView>
          {renderTotal()} */}
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
