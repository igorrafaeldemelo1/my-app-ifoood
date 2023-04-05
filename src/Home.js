import React from "react";
import { Link } from "react-router-dom";
import Login from "./Paginas/Login";


function Home() {
    return (
      <>
        <Link to='Login' >Inicie</Link>
      </>
    );
  }
  
  export default Home;