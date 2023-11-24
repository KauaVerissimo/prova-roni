import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';


const Pagina2 = () => {
  return (
    <div>
      <h1>Página 2</h1>
      {'Conteúdo da Página 1'}
    </div>
  );
};


const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/pagina2">Página 2</Link>
        </li>
      </ul>
    </nav>
  );
};


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/pagina2" element={<Pagina2/>} />
//       </Routes>
//     </Router>
//   );
// };

export default Pagina2;
