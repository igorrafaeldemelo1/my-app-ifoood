import React from "react";
import './Globalcss.css';
import BarraNavegação from "../Componentes/BarraNavegação";
import Top from "../Componentes/TopBarra";
import MenuBarra from "../Componentes/MenuBarra";

function Section01() {


    return (
        <>
            <Top/>
            <BarraNavegação />
            <MenuBarra/>
        </>
    );
}

export default Section01;