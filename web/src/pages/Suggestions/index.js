import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Shadow } from './styles';
import Button from '~/components/Button';
import Background from '~/components/Background';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { TCMView } from '~/styles';

export default function Suggestions() {
  const client = {
    name: 'João',
    cod: '2545',
  };
  const matriz = {
    name: 'TCM-25',
    cod: '0452',
  };
  const unit = {
    name: 'Santa Catarina TCM',
    cod: '4872',
  };

  const renderClient = () => (
    <div className="labelSuggestions">
      <span>
        Nome:{' '}
        <strong>
          {client && client.name ? client.name : ` Nome Completo `}
        </strong>
      </span>
      <span>
        Cód: <strong>{client && client.cod ? client.cod : ` 0000 `}</strong>
      </span>
    </div>
  );

  const renderMatrix = () => (
    <div className="labelSuggestions">
      <span>
        Matriz:{' '}
        <strong>
          {matriz && matriz.name ? matriz.name : ` Nome da Matriz `}
        </strong>
      </span>
      <span>
        Cód: <strong>{matriz && matriz.cod ? matriz.cod : ` 0000 `}</strong>
      </span>
    </div>
  );

  const renderUnit = () => (
    <div className="labelSuggestions">
      <span>
        Unidade:{' '}
        <strong>{unit && unit.name ? unit.name : ` Nome da Unidade `}</strong>
      </span>
      <span>
        Cód: <strong>{unit && unit.cod ? unit.cod : ` 0000 `}</strong>
      </span>
    </div>
  );

  const renderDropDownSelect = () => (
    <div className="dropdow">
      <button type="button">
        Selecione o departamento{' '}
        <div>
          <i
            className="fa fa-sort-desc"
            style={{ fontSize: 40, textShadow: 1, color: '#fff' }}
          />
        </div>
      </button>
      <div className="listDropDow">
        <ul>
          <li>
            <button type="button">Administrativo</button>
          </li>
          <li>
            <button type="button">Comercial</button>
          </li>
          <li>
            <button type="button">Financeiro</button>
          </li>
        </ul>
      </div>
    </div>
  );

  const renderDescription = () => (
    <div className="description">
      <textarea
        name="description"
        id=""
        cols="30"
        rows="10"
        placeholder="Descrição...."
      />
    </div>
  );

  return (
    <Background>
      <Shadow>
        <Header title="Sugestões" />
        <Container>
          <div>
            {renderClient()}

            {renderMatrix()}

            {renderUnit()}
          </div>
          {renderDropDownSelect()}
          {renderDescription()}
        </Container>
        <Footer>
          <TCMView mVertical={8} width="100%">
            <Button title="Entrar" height={50} />
          </TCMView>
          <TCMView
            display="flex"
            width="100%"
            row
            align="center"
            justify="space-between"
          >
            <Link to="#">Trocar de usuário</Link>
            <Link to="/dashboard">Cancelar</Link>
          </TCMView>
        </Footer>
      </Shadow>
    </Background>
  );
}
