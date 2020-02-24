import PropTypes from 'prop-types';
import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Shadow } from './styles';
import Background from '~/components/Background';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { TCMView } from '~/styles';
import Button from '../Button';

export default function DefaultLayout({
  children,
  headerTitle,
  maxWidth,
  footerButtonAction,
  footerButtonTitle,
  footerLeftTitle,
  footerLeftLink,
  footerCenterTitle,
  footerCenterLink,
  footerRightTitle,
  footerRightLink,
}) {
  return (
    <Background>
      <Shadow style={{ maxWidth }}>
        <Header title={headerTitle} />
        <Container>{children}</Container>
        <Footer>
          {footerButtonTitle && (
            <TCMView mVertical={8} width="100%">
              <Button title={footerButtonTitle} onClick={footerButtonAction} />
            </TCMView>
          )}
          <TCMView
            display="flex"
            width="100%"
            row
            align="center"
            justify="space-between"
          >
            <Link to={footerLeftLink}>{footerLeftTitle}</Link>
            {/* <Link to={footerLeftLink}>Trocar de usuário</Link> */}
            <Link to={footerCenterLink}>{footerCenterTitle}</Link>
            {/* <Link to="/signup">Novo usuário</Link> */}
            <Link to={footerRightLink}>{footerRightTitle}</Link>
            {/* <Link to={footerRightLink}>Sair</Link> */}
          </TCMView>
        </Footer>
      </Shadow>
    </Background>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
  headerTitle: PropTypes.string,
  maxWidth: PropTypes.number,
  footerButtonAction: PropTypes.func,
  footerButtonTitle: PropTypes.string,
  footerLeftTitle: PropTypes.string,
  footerLeftLink: PropTypes.string,
  footerCenterTitle: PropTypes.string,
  footerCenterLink: PropTypes.string,
  footerRightTitle: PropTypes.string,
  footerRightLink: PropTypes.string,
};

DefaultLayout.defaultProps = {
  headerTitle: '',
  maxWidth: 900,
  footerButtonAction: () => {},
  footerButtonTitle: '',
  footerLeftTitle: '',
  footerLeftLink: '',
  footerCenterTitle: '',
  footerCenterLink: '',
  footerRightTitle: '',
  footerRightLink: '',
};
