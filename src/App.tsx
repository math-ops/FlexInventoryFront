import React from 'react';
import GlobalStyle from './styles/global';
import Footer from './components/Footer';
import Header from './components/Header';
import CadastroModelos from './components/Modelo';
//import CadastroFabricante from './components/Fabricante';

function App() {
  return (
    <>
      
      <Header />
      <CadastroModelos />
      <Footer />
      <GlobalStyle />
    </>
    
  );
}

export default App;
