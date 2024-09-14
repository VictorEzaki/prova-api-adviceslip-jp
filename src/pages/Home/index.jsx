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
            <p id='main-paragraph'>
                Ao acessar a página "API", você será redirecionado para uma página com o subtítulo "Conselho do Dia" e com um conselho aleatório automaticamente gerado abaixo. 
            </p>
            <img src='/src/components/fts/exemplo.png' id='img'/>
            <p id='main-paragraph'>
                Ao clicar no botão "Obter novo conselho", você também pode trocar de conselho quantas vezes você quiser.
            </p>
        </div>
    )
}