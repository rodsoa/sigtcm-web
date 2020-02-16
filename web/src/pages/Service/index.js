import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Shadow } from './styles';
import Button from '~/components/Button';
import Background from '~/components/Background';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { TCMView } from '~/styles';
import history from '~/services/history';

export default function Service() {
  const handleToNewSale = () => {
    history.push('/newsale');
  };
  const handleToNewSession = () => {
    history.push('/newsession');
  };
  return (
    <Background>
      <Shadow>
        <Header title="Atendimento" />
        <Container>
          <div className="rowTwoButtons">
            <Button
              whiteButton
              title="Nova Venda"
              height={100}
              width="50%"
              onClick={handleToNewSale}
              // style={{ margin: 16, height: 100, width: '100%', borderWidth: 0 }}
            />
            <Button
              whiteButton
              title="Nova Sessão"
              height={100}
              width="50%"
              onClick={handleToNewSession}
              // style={{ margin: 16, height: 100, width: '100%', borderWidth: 0 }}
            />
          </div>
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
            <Link to="#">Trocar de usuário</Link>
            <Link to="#">Sair</Link>
          </TCMView>
        </Footer>
      </Shadow>
    </Background>
  );
}
