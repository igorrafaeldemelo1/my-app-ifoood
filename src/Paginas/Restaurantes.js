import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Globalcss.css';
import BancoDados from "../BancoDados";
import BancoDadosLojas from "../BancoDadosLojas";



function Restautante() {

    const Melhores = BancoDadosLojas.Restaurante.map((number) => <>
        {number[4] ? <div className="ImgIcons" style={{ backgroundImage: `url("${number[1]}")` }}></div> : <></>}
    </>)

    

    const ListLojas = BancoDadosLojas.Restaurante.map((number) => <li className="flex">
        <div className="ImgIconsLoja " onClick={()=>{
            window.open('http://localhost:3000/Pedidos','_self')
            
        }} style={{ backgroundImage: `url("${number[1]}")` }}></div>
        <div>
            <div className="center">{number[0]}</div>
            <div className="flex">
                <div className="StarsFav">{number[2]}</div>
                <div>{number[3]}/{number[3] + 1.0} </div>
            </div>
        </div>
        <div id={number[0]} className="end" onClick={(e) => {
        number[4] = !number[4]
        const div = document.getElementById(number[0])
        if (!number[4]) {
          return div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
        </svg>`
        } else {

          return div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
        </svg>`
        }
      } } >{number[4] ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
        </svg>}</div>
    </li>
    )

    return (
        <>
        
            <div className="">
                <div>
                    Favoritos
                </div>
                <div className="flex CardFav">
                    {Melhores}
                </div>
                <div>
                    Ofertas
                </div>
                <div className="ListLojasIcon">
                    <ul>
                        {ListLojas}
                    </ul>
                </div>
            </div>
        </>
    );



}

export default Restautante;