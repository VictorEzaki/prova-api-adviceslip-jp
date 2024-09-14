import Header from '../../components/Header'
import './styles.css'

export default function Home (){
    return(
        <div id='main-content'>
            <h2 id='main-title'>
                Seja Bem-Vindo!
            </h2>
            <h3 id='main-subtitle'>
                Sobre
            </h3>
            <p id='main-paragraph'>
                A API "Advice Slip" é uma API bastante simples e útil para obter conselhos aleatórios. Ela fornece uma interface para acessar uma coleção de dicas e conselhos em formato de texto.
            </p>
        </div>
    )
}