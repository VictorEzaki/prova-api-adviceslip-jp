import { useEffect, useState } from 'react'
import PostIt from '../../components/PostIt'
import './styles.css'

const mock = [
    {

        "slip": {
        "id": 1,
        "advice": "Remember that spiders are more afraid of you, than you are of them."
        }
    }
]

export default function ApiAdvices (){
    const [ conteudo, setConteudo ] = useState(<></>)
    // const [ generate, setGenerate ] = useState(1)

    async function getAdvice() {
        const reqOptions = {
            method: 'GET',
            redirect: 'follow'
        }

        const response = await fetch(
            'https://api.adviceslip.com/advice',
            reqOptions
        )

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json();

        return data
    }

    async function buildPost() {
        const consult = await getAdvice()

        return consult.slip.map(slip => <PostIt data={slip} />)
    }

    useEffect(() => {
        async function getConteudo() {
            setConteudo(await buildPost())
        }

        getConteudo()
    }, [])



    return(
        <div id='api'>
            { conteudo }
        </div>
    )
}