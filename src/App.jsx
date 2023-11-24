import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Page1 = () => {
  return (
    <div>
      <h1>Página 1</h1>
      <p>Receita de Bolo De Cenoura</p>
      <p>
      Ingredientes (8 porções)
Massa
óleo
1/2 xícara (chá) de óleo
cenoura
3 cenouras médias raladas
ovo
4 ovos
açúcar
2 xícaras (chá) de açúcar
farinha de trigo
2 e 1/2 xícaras (chá) de farinha de trigo
fermento em pó químico
1 colher (sopa) de fermento em pó
Cobertura
manteiga
1 colher (sopa) de manteiga
chocolate em pó
3 colheres (sopa) de chocolate em pó
açúcar
1 xícara (chá) de açúcar
leite
1 xícara (chá) de leite
      </p>
    </div>
  );
};

const Page2 = () => {
  return (
    <div>
      <h1>Página 2</h1>
      <p>Comidas Mais Feitas no Mundo</p>
      <p>
      Se tem algo que aproxima as pessoas, não importa de que país elas sejam, é a comida. 
      Uma pesquisa da Organização das Nações Unidas para Alimentação e Agricultura apontou os dez alimentos 
      mais consumidos ao redor do mundo, trazendo apenas algumas diferenças de preparo destes ingredientes 
      que são típicos das regiões.

Em primeiro lugar, o destaque vai para o leite e seus derivados, como os queijos, 
consumidos em cerca de 580 milhões de toneladas por ano no mundo. Segundo a Embrapa 
(Empresa Brasileira de Pesquisa Agropecuária), o leite possui importância econômica de renda e sobrevivência 
para grande parte da população mundial, além de ser uma fonte vital de nutrientes. 
Em média, 116 kg de leite são consumidos por ano por cada habitante, número que vem crescendo uma taxa de 1,2% 
ao ano, segundo a pesquisa divulgada em 2019.
      </p>
    </div>
  );
};

const Page3 = () => {
  return (
    <div>
      <h1>Página 3</h1>
      <p>Como Fazer o Melhor Bolo do Mundo</p>
      <p>
      Como fazer Pavê tradicional:
1
Prepare o creme branco dissolvendo a maisena no leite. Leve ao fogo junto com o leite condensado e as gemas e 
fique mexendo até engrossar e quase ferver. Nesse momento desligue, junte a baunilha, misture e reserve.

Dica: Para eliminar o cheiro e gosto de ovo passe as gemas de ovo por uma peneira, filtrando a pelinha delas.
2
Para o creme de chocolate coloque no fogo uma panela com o leite condensado, o chocolate e a manteiga. 
Fique mexendo até engrossar em ponto de brigadeiro mole e desligue o fogo. 
Deixe esfriar um pouco, junte o creme de leite e misture bem.
3
Finalmente monte este pavê receita tradicional: 
coloque na travessa metade do creme branco e cubra com alguns biscoitos umedecidos no leite. 
Acrescente uma camada de creme de chocolate e mais biscoitos umedecidos. 
Repita até esgotar os cremes e os biscoitos.
4
Reserve seu pavê tradicional na geladeira por 1-2 horas e sirva decorado com biscoitos. 
Bom apetite e diga nos comentários o que você achou!
      </p>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/page1">Página 1</Link>
        </li>
        <li>
          <Link to="/page2">Página 2</Link>
        </li>
        <li>
          <Link to="/page3">Página 3</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  );
};

export default App;