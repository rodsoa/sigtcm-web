import React from 'react';

import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Container, Shadow } from './styles';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { TCMView } from '~/styles';
// import history from '~/services/history';

export default function ServiceDetails() {
  const employee = {
    cod: '0001',
    procedure: 'Fotodepilação/ Faixa de Barba',
    name: 'Roberto Silva',
    date: '1994/08/15',
    time: '15:30',
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

  const renderCodToCNPJ = () => (
    <div className="labels">
      <TCMView
        display="flex"
        width="100%"
        align="center"
        justify="space-between"
      >
        <span>
          Cód.: <strong>{employee.cod}</strong>
        </span>
        <span>
          Nome: <strong>{employee.name}</strong>
        </span>
      </TCMView>
      <span>
        Procedimento: <strong>{employee.procedure}</strong>
      </span>
      <TCMView
        display="flex"
        width="100%"
        align="center"
        justify="space-between"
      >
        <span>
          Data: <strong>{format(new Date(employee.date), 'dd/MM/yyyy')}</strong>
        </span>
        <span>
          hora: <strong>{employee.time}</strong>
        </span>
        <span>
          Local: <strong>{employee.address}</strong>
        </span>
      </TCMView>
      <span>
        Funcionário: <strong>João</strong>
      </span>
    </div>
  );

  const renderInfo = () => (
    <TCMView className="labelInfo">
      <div className="labels">
        <span>
          Info 01: <strong>{employee.cod}</strong>
        </span>
        <span>
          Info 02: <strong>{employee.cod}</strong>
        </span>
        <span>
          Info 03: <strong>{employee.cod}</strong>
        </span>
      </div>
      <div className="labels">
        <span>
          Info 04: <strong>{employee.cod}</strong>
        </span>
        <span>
          Info 05: <strong>{employee.cod}</strong>
        </span>
        <span>
          Info 06: <strong>{employee.cod}</strong>
        </span>
      </div>
      <div className="labels">
        <span>
          Info 07: <strong>{employee.cod}</strong>
        </span>
        <span>
          Info 08: <strong>{employee.cod}</strong>
        </span>
        <span>
          Info 09: <strong>{employee.cod}</strong>
        </span>
      </div>
    </TCMView>
  );

  return (
    <Background>
      <Shadow>
        <Header title="Perfil Cliente" />
        <Container>
          <TCMView className="renderLabels" flex={1} row>
            {renderCodToCNPJ()}
          </TCMView>
          {renderInfo()}
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
