import React from "react";
import './Globalcss.css';
import BancoDados from "../BancoDados";
import BancoDadosLojas from "../BancoDadosLojas";
import Top from "../Componentes/TopBarra";
import MenuBarra from "../Componentes/MenuBarra";

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

    const ListPedidosCheck = BancoDadosLojas.Restaurante[0][5].map((number) =>
        <>
            {number[3] >= 1 ? <div className="flex m-3 ListItenComfirmado">
                <div className="ImgIconsLojaItens Close" style={{ backgroundImage: `url("${number[1]}")` }}></div>
                <div >
                    <div className="pt-4 ">{number[0]}</div>

                    <div>Qtd{number[3]}</div>
                </div>
                <div className="Close"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                </svg></div>
            </div> : <div></div>}
        </>
    )

    return (
        <>
            <Top />
            <section className="LojasDados">
                <div className="LogoImgLoja" style={{ backgroundImage: `url("${BancoDadosLojas.Restaurante[0][1]}")` }}></div>
                <div className="center">{BancoDadosLojas.Restaurante[0][0]}</div>
                <div className="flex just Dados">
                    <>{BancoDadosLojas.Restaurante[0][2]}</>
                    <>{BancoDadosLojas.Restaurante[0][3]}/{BancoDadosLojas.Restaurante[0][3] + 1.0}</>
                </div>
                {ListLojas}
                <button onClick={() => {
                    BancoDadosLojas.Restaurante[0][5].map((number) => {
                        const valor = document.getElementById(number[0])
                        number[3] = valor.textContent
                        BancoDados.ContItem =+number[3]
                        BancoDados.SomarTotal = BancoDados.SomarTotal + (number[2] * valor.textContent)
                        const boxPedido = document.getElementById("PedidosFinalizados")
                        boxPedido.style.display = 'block'

                    })

                }}>Comprar</button>
                <section id="PedidosFinalizados" className="text-center"  >
                    <Top />
                    {ListPedidosCheck}
                    <button className="mt-5 " onClick={() => {

                        const boxPedido = document.getElementById("ConferirEndereço")
                        boxPedido.style.display = 'block'



                    }} >Confirme</button>
                </section>
                <section id="ConferirEndereço">
                    <Top />
                    <div className="EndereçoIp flex  mt-5">
                        <div>
                            <div>{BancoDados.Cidade}</div>
                            <div>{BancoDados.Bairo}</div>
                            <div className="flex text-center Close">
                                <div>R: {BancoDados.Rua}</div>
                                <div>Ap: {BancoDados.Ap}</div>
                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-check-circle-fill text-white " viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                        </div>

                    </div>
                    <div className="flex bg-black rounded mt-4 p-4 just text-white">
                        <div >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </div>
                        <div>
                            Adicionar Endereço
                        </div>


                    </div>

                </section>
            </section>
            <MenuBarra />
        </>
    );

}

export default Pedidos;