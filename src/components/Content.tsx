import React from 'react';


const Content = () => {
    return (
        <>
            <div className="flex-container apresentacao">
                <div className="texto-apresentacao">
                    <h1>Flex <br />Turismos</h1>
                    <p>O melhor serviço para você!</p>
                    <a href="" className="btn">Saiba Mais!</a>
                </div>

                <div>
                    <div><img src="0-main.png" alt="banner de apresentação" /></div>
                </div>
            </div>

            <div className="flex-container divider"></div>

            <div className="flex-container apresentacao" id="quem-somos">
                <div>
                    <img src="1-quem-somos.png" alt="balcão de atendimento" />
                </div>

                <div>
                    <h2>Quem somos</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. </p>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                        to using 'Content here, content here', making it look like readable English.</p>
                </div>
            </div>

            <div className="container-externo" id="servicos">
                <div className="flex-container">
                    <h2>Serviços</h2>
                </div>

                <div className="list-servicos">
                    <div className="item-servico">
                        <div><img src="icon-2.png" alt="hospedagens" /></div>
                        <p>Hospedagens</p>
                        <a href="#">Comprar Agora</a>
                    </div>

                    <div className="item-servico">
                        <div><img src="icon-1.png" alt="pacote de viagens" /></div>
                        <p>Pacotes de viagens</p>
                        <a href="#">Comprar Agora</a>
                    </div>

                    <div className="item-servico">
                        <div><img src="icon-3.png" alt="roteiros personalizados" /></div>
                        <p>Roteiros personalizados</p>
                        <a href="#">Comprar Agora</a>
                    </div>

                </div>
            </div>

            <div className="flex-container" id="planos">
                <div>
                    <h2>Planos</h2>
                </div>

                <div className="list-planos">
                    <div className="item-plano">
                        <h3>Plano 2</h3>
                        <br />
                        <ul>
                            <li>Suporte 24h</li>
                            <li>Serviços de quarto</li>
                            <li>Guia turístico</li>
                        </ul>
                        <a href="#" className="btn">Saiba Mais!</a>
                    </div>

                    <div className="item-plano">
                        <h3>Plano 2</h3>
                        <br />
                        <ul>
                            <li>Suporte 24h</li>
                            <li>Serviços de quarto</li>
                            <li>Guia turístico</li>
                            <li>Roteiro de trilhas</li>
                            <li>Serviço personalizado</li>
                        </ul>
                        <a href="#" className="btn">Saiba Mais!</a>
                    </div>

                    <div className="item-plano">
                        <h3>Plano 3</h3>
                        <br />
                        <ul>
                            <li>Suporte 24h</li>
                            <li>Serviços de quarto</li>
                            <li>Guia turístico</li>
                            <li>Roteiro de trilhas</li>
                            <li>Serviço personalizado</li>
                            <li>Área Vip</li>
                            <li>Cashback</li>
                        </ul>
                        <a href="#" className="btn">Saiba Mais!</a>
                    </div>
                </div>
            </div>
        </>


    );
};


export default Content;
