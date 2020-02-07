import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Container, Shadow } from './styles';
import Button from '~/components/Button';
import Background from '~/components/Background';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { TCMView } from '~/styles';
import history from '~/services/history';

export default function PhotoType() {
  return (
    <Background>
      <Shadow>
        <Header title="Fototipo" />
        <Container>
          <TCMView
            display="flex"
            width="100%"
            flex={1}
            align="center"
            justify="center"
            bgColor="#eee"
            pad={8}
            margin={16}
            bdRadius={4}
          >
            <Form>
              <TCMView className="questions" display="flex" column>
                <TCMView>
                  <strong>Pergunta 1:</strong>
                  <Input name="Question1" type="text" />
                </TCMView>
                <TCMView>
                  <strong>Pergunta 2:</strong>
                  <Input name="Question2" type="text" />
                </TCMView>
                <TCMView>
                  <strong>Pergunta 3:</strong>
                  <Input name="Question3" type="text" />
                </TCMView>
                <TCMView>
                  <strong>Pergunta 4:</strong>
                  <Input name="Question4" type="text" />
                </TCMView>
                <TCMView>
                  <strong>Pergunta 5:</strong>
                  <Input name="Question5" type="text" />
                </TCMView>
                <TCMView>
                  <strong>Pergunta 6:</strong>
                  <Input name="Question6" type="text" />
                </TCMView>
                <TCMView>
                  <strong>Pergunta 7:</strong>
                  <Input name="Question7" type="text" />
                </TCMView>
                <TCMView>
                  <strong>Pergunta 8:</strong>
                  <Input name="Question8" type="text" />
                </TCMView>
              </TCMView>
            </Form>
          </TCMView>
        </Container>
        <Footer>
          <TCMView mVertical={8} width="100%">
            <Button title="Entrar" />
          </TCMView>
          <TCMView
            display="flex"
            width="100%"
            row
            align="center"
            justify="space-between"
          >
            <Link to="#">Trocar de usuário</Link>
            <Link to="/signup">Novo usuário</Link>
            <Link to="#">Sair</Link>
          </TCMView>
        </Footer>
      </Shadow>
    </Background>
  );
}
