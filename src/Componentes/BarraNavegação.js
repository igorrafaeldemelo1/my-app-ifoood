import React from "react";
import { useState } from "react";
import Restautante from "../Paginas/Restaurantes";
import Caffeteria from "../Paginas/Caffeteria";
import Pizzaria from "../Paginas/Pizzaria";
import Lancheria from "../Paginas/Lancheria";

const BarraNavegação = () => {

    

    const [Page, setPage] = useState(<Restautante />);

    const handleSubmitRestaurantes = () => {
        setPage(<Restautante />)
        
        const n1 = document.getElementById('s1')
        n1.style.borderBottom = "solid 4px rgb(34, 188, 245)"
        const n2 = document.getElementById('s2')
        n2.style.borderBottom = "white"
        const n3 = document.getElementById('s3')
        n3.style.borderBottom = "white"
        const n4 = document.getElementById('s4')
        n4.style.borderBottom = "white"
    }
    const handleSubmitCaffeterias = () => {
        setPage(<Caffeteria />)
        
        const n1 = document.getElementById('s1')
        n1.style.borderBottom = "white"
        const n2 = document.getElementById('s2')
        n2.style.borderBottom = "solid 4px rgb(34, 188, 245)"
        const n3 = document.getElementById('s3')
        n3.style.borderBottom = "white"
        const n4 = document.getElementById('s4')
        n4.style.borderBottom = "white"
    }
    const handleSubmitLancherias = () => {
        setPage(<Lancheria />)
        const n1 = document.getElementById('s1')
        n1.style.borderBottom = "white"
        const n2 = document.getElementById('s2')
        n2.style.borderBottom = "white"
        const n3 = document.getElementById('s3')
        n3.style.borderBottom = "solid 4px rgb(34, 188, 245)"
        const n4 = document.getElementById('s4')
        n4.style.borderBottom = "white"
    }
    const handleSubmitPizzarias = () => {
        setPage(<Pizzaria />)
        const n1 = document.getElementById('s1')
        n1.style.borderBottom = "white"
        const n2 = document.getElementById('s2')
        n2.style.borderBottom = "white"
        const n3 = document.getElementById('s3')
        n3.style.borderBottom = "white"
        const n4 = document.getElementById('s4')
        n4.style.borderBottom = "solid 4px rgb(34, 188, 245)"
    }


    return <>

        <section id="Restaurantes" className="flex " >
            <div id="s1" className="Btn" onClick={handleSubmitRestaurantes}>Restaurentes
            </div >
            <div id="s2" className="Btn" onClick={handleSubmitCaffeterias}>Caffeterias
            </div>
            <div id="s3" className="Btn" onClick={handleSubmitLancherias}>Lancherias
            </div>
            <div id="s4" className="Btn" onClick={handleSubmitPizzarias}>Pizzarias
            </div>

        </section>
        <div className="Line"></div>
        <section>
            {Page}
        </section>
    </>;
};

export default BarraNavegação;