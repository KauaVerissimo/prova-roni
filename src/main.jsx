import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Pagina1 from './Pagina1'
import Pagina2 from './Pagina2'
import Pagina3 from './Pagina3'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    {/* <Pagina1 />
    <Pagina2 />
    <Pagina3 /> */}
  </React.StrictMode>,
  
);

