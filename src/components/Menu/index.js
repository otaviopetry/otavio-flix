import React from 'react';
import './styles.css';

import logoImg from '../../assets/img/logo.png';

function Menu () {
    return (
        <header>
            <img class="logo" src={logoImg} alt="Logotipo otavio.flix" />
        </header>
    )
}
export default Menu;