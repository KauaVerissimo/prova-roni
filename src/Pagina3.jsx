import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';


const Pagina3 = () => {
  return (
    <div>
      <h1>Página 3</h1>
      {'Conteúdo da Página 3'}
    </div>
  );
};


const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/pagina3">Página 3</Link>
        </li>
      </ul>
    </nav>
  );
};


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/pagina3" element={<Pagina3/>} />
//       </Routes>
//     </Router>
//   );
// };

export default Pagina3;
