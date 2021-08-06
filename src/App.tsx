import React from 'react';
import GlobalStyle from './styles/global';
import Footer from './components/Footer';
import Header from './components/Header';
//import CadastroModelos from './components/Modelo';
//import Alertas from './components/Alerts';
import CadastroFabricante from './components/Fabricante';

function App() {
  return (
    <>
      
      <Header />
      <CadastroFabricante />
      <Footer />
      <GlobalStyle />
    </>
    
  );
}

export default App;
