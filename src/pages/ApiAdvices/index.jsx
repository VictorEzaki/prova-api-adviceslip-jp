import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';

const mock = {
  results: [{
    "slip": {
      "id": 77,
      "advice": "Mercy is the better part of justice."
    }
  }]
}

export default function ApiAdvices() {
  const [ conteudo, setConteudo ] = useState(<>Carregando...</>)

  async function getAdvice() {
    return mock;
  }

  async function buildAdvice() {
    const consult = await getAdvice();

    return consult.results.map(
      advices => 
        <>
          { advices.slip.advice }
        </>
    );
  }

  useEffect(() => {
    async function getConteudo() {
      setConteudo(await buildAdvice())
    }

    getConteudo();
  }, [])

  return (
    <div className='api'>
      { conteudo }
    </div>
  )
}