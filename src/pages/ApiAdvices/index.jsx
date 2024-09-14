import React, { useState, useEffect } from 'react';
import './styles.css'

export default function ApiAdvices() {
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
    <div id='api'>
      <h1 id='api-title'>Conselho do Dia</h1>
      <p id='advice'>{advice ? advice : 'Carregando...'}</p>
      <button onClick={fetchAdvice}>Obter novo conselho</button>
    </div>
  );
}
