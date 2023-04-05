import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Globalcss.css';
import BancoDados from "../BancoDados";
import BarraNavegação from "../Componentes/BarraNavegação";
import Top from "../Componentes/TopBarra";


function Section01() {


    return (
        <>
            <Top/>
            <BarraNavegação />
        </>
    );



}

export default Section01;