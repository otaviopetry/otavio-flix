import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

import logoImg from '../../assets/img/logo.png';

function Menu () {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logoImg} alt="Logotipo otavio.flix" />
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    )
}
export default Menu;