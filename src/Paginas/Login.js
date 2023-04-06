import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Globalcss.css';
import BancoDados from "../BancoDados";



function Login() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [Login, setLogin] =  useState(false);

    const LoginPage = () =>{
        if(BancoDados.Usuario == name && BancoDados.Password== password){
            
         return setLogin(true);
        }else{
            return setLogin(false);
        }
        
    }

    return (
        <>
            <form className="center ">
                <div>
                <label>Enter your name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                </div>
                <div>
                <label>Enter your Password:
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                </div>
                <div>
                <label>Enter your E-mail:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        
                    />
                </label>
                </div>
                <div onMouseOver={LoginPage} >{Login?<Link to="/Section01">Logar</Link>:<button onClick={()=>alert("Senha incorreta")}>Logar</button>}</div>
            </form>
        </>
    );
}

export default Login;