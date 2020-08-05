import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: #232323;
    color: var(--white);
    flex: 1;
    padding: 50px 5%;

    ${({ paddingAll }) => css`
      padding: ${paddingAll};
    `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  paddingAll: '50px 5%',
};

PageDefault.propTypes = {
  paddingAll: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PageDefault;
