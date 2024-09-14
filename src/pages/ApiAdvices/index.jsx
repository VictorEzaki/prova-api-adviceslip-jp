import React, { useState, useEffect } from 'react';
import './styles.css'

export default function App() {
  const [advice, setAdvice] = useState('');

  async function fetchAdvice() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error('Erro ao buscar conselho:', error);
    }
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div>
      <h1>Conselho do Dia</h1>
      <p>{advice ? advice : 'Carregando...'}</p>
      <button onClick={fetchAdvice}>Obter novo conselho</button>
    </div>
  );
}
