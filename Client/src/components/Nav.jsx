import React from "react";
import style from "./Nav.module.css"
import SearchBar from './SearchBar.jsx';
import {Link} from 'react-router-dom';

const Nav = (props) => {

    return (
        <div className={style.contenedorNav}>
            <Link className={style.links} to="/.">BIENVENIDO</Link>
            <Link className={style.links} to="/home">INICIO</Link>
            <Link className={style.links} to="/favoritos">FAVORITOS</Link>
            <Link className={style.links} to="/about">ACERCA</Link>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}


export default Nav;