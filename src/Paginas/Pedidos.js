import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Globalcss.css';
import BancoDados from "../BancoDados";
import BancoDadosLojas from "../BancoDadosLojas";
import Top from "../Componentes/TopBarra";


function Pedidos() {

    const ListLojas = BancoDadosLojas.Restaurante[0][5].map((number) =>
        <section className="flex just">
            <div className="ImgIconsLojaItens" style={{ backgroundImage: `url("${number[1]}")` }}></div>
            <div className="QtdItens">
                <div className="center">{number[0]}</div>
                <div className="flex just">
                    <div onClick={() => {
                        const valorIten = document.getElementById(number[0])
                        if (valorIten.textContent >= 0) {
                            number[3] = valorIten.textContent++
                            valorIten.innerHTML = valorIten.textContent
                        }
                    }}>+</div>
                    <div id={number[0]} >{number[3]}</div>
                    <div onClick={() => {
                        const valorIten = document.getElementById(number[0])
                        if (valorIten.textContent >= 1) {
                            number[3] = valorIten.textContent--
                            valorIten.innerHTML = valorIten.textContent
                        }
                    }}>-</div>
                </div>
            </div>
            <div>+Addicional</div>
        </section>
    )
    return (
        <>
            <Top />
            <section>
                <div className="LogoImgLoja" style={{ backgroundImage: `url("${BancoDadosLojas.Restaurante[0][1]}")` }}></div>
                <div className="center">{BancoDadosLojas.Restaurante[0][0]}</div>
                <div className="flex just Dados">
                    <>{BancoDadosLojas.Restaurante[0][2]}</>
                    <>{BancoDadosLojas.Restaurante[0][3]}/{BancoDadosLojas.Restaurante[0][3] + 1.0}</>
                </div>
                {ListLojas}
            </section>
        </>
    );



}

export default Pedidos;