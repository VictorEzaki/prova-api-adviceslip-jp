import React, { useState, useEffect } from 'react';
import './styles.css';

export default function ApiAdvices() {
  const [ conteudo, setConteudo ] = useState("Carregando...")

  async function getAdvice() {
    const reqOptions = {
      method: "GET",
      redirect: "follow"
    };

    const response = await fetch(
      "https://api.adviceslip.com/advice",
      reqOptions
    );

    if (!response.ok) {
      throw new Error("Http Error"); 
    };

    const apiResponse = await response.json();

    return apiResponse;
  }

  async function buildAdvice() {
    const consult = await getAdvice();

    return consult.slip.advice;
  }

  useEffect(() => {
    async function getConteudo() {
      setConteudo(await buildAdvice())
    }

    getConteudo();
  }, [])

  async function callAdvice() {
    setConteudo(await buildAdvice())
  }

  return (

    <div id='api'>
      <h1 id='api-title'>Conselho do Dia</h1>
      <div id='advice'>
        <div id='point'></div>
        <span>" { conteudo } "</span>
      </div>
      <button onClick={ callAdvice }>Obter novo conselho</button>
    </div>

  )
}