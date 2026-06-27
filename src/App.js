import React from "react";
import './index.css';
import Home from './pages/Home';
import { LanguageProvider } from './context/LanguageContext';

const App = () => {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
};

export default App;
