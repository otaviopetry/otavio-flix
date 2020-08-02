import React from 'react';
import './styles.css';

import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

import logoImg from '../../assets/img/logo.png';

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logoImg} alt="Logotipo otavio.flix" />
            </a>

            <Button as="a" href="/cadastrar-video">
                Novo vídeo
            </Button>
        </nav>
    )
}
export default Menu;