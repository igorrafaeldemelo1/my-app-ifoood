import React from "react";
import { Link } from "react-router-dom";
import './Globalcss.css';

function MenuBarra() {
    return (
        <>
            <section className="ListSection">
            <Link to="/Section01">Inicio</Link>
            <Link to="/Restaurantes">Busca</Link>
            <Link to="/Restaurantes">Pedido</Link>
            <Link to="/Restaurantes">Perfil</Link>
            </section>
        </>
    );
}

export default MenuBarra;