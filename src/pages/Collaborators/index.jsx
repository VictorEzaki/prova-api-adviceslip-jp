import './styles.css'

export default function Collaborators() {
    return (
        <div id='container-collab'>
            <div className="collaborators">
                <img className='img-perfil' src="https://github.com/victorezaki.png" alt="" />
                <div className='text'>
                    <div>
                        <h3>Colaborador:</h3>
                        <p className='collab-paragraph'>
                            Victor Takeyoshi Kieper Ezaki.
                        </p>
                    </div>
                    <div>
                        <h3>Responsabilidades:</h3> 
                        <p className='collab-paragraph'>
                            Fui responsável pela escolha das cores do projeto, além de trabalhar no conteúdo e na estilização dos componentes. No entanto, minha principal contribuição foi na página de API, onde realizei a requisição dos dados (fetch) cuidando também da estilização.
                        </p>
                    </div>
                    <div>
                        <h3>Experiência:</h3> 
                        <p class='collab-paragraph'>
                            Sempre gostei de projetos e provas que envolvem trabalho em equipe, e neste caso não foi diferente. A troca de ideias para melhorar o projeto sempre traz resultados positivos, o que nos permite entregar o melhor possível. Minha maior dificuldade foi no consumo da API, pois inicialmente não conseguia obter as informações. No entanto, após muita pesquisa, consegui resolver o problema. Essa prova foi uma grande oportunidade de aprendizado, já que desenvolver um projeto do zero, com suas próprias ideias, faz com que você enfrente desafios, aprenda a lidar com os erros e a encontrar soluções, fixando muito mais o conteúdo.
                        </p>
                    </div>
                </div>
            </div>

            <div className="collaborators">
                <img className='img-perfil' src="https://github.com/wandih.png" alt="" />
                <div className='text'>
                    <div>
                        <h3>Colaborador:</h3>
                        <p className='collab-paragraph'>
                            Wanderson Andrey Ricardo.
                        </p>
                    </div>
                    <div>
                        <h3>Responsabilidades: </h3> 
                        <p className='collab-paragraph'>
                            Fui responsável por analisar a documentação do API junto do meu colega de grupo, por criar a estrutura do projeto, como as pastas compenents e pages, bem como as demais pastas. Minha principal contribuição foi com a página Home.
                        </p>
                    </div>
                    <div>
                        <h3>Experiência:</h3> 
                        <p class='collab-paragraph'>
                            Acho que foi uma boa experiência. Nós soubemos cooperar bem entre si conseguimos manter a calma durante os momentos de adversidade. Também foi uma ótima maneira de por nossos conhecimentos a prova e aquirir novos ou aprimorar os já obtidos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}