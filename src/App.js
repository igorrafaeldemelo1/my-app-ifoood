import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import Login from './Paginas/Login';
import Section01 from './Paginas/Section01';
import Caffeteria from './Paginas/Caffeteria';
import Pizzaria from './Paginas/Pizzaria';
import Lancheria from './Paginas/Lancheria';
import Restautante from './Paginas/Restaurantes';
import Pedidos from './Paginas/Pedidos';

function App() {
  return (
    <Router>
      <Routes>
         <Route path='/' element={<Home/>}  />
         <Route path='Login' element={<Login/>}  />
         <Route path='Section01' element={<Section01/>}  />
         <Route path='Caffeteria' element={<Caffeteria/>}  />
         <Route path='Pizzaria' element={<Pizzaria/>}  />
         <Route path='Lancheria' element={<Lancheria/>}  />
         <Route path='Restautante' element={<Restautante/>}  />
         <Route path='Pedidos' element={<Pedidos/>}  />
      </Routes>
    </Router>
  );
}

export default App;
