import React from 'react';


const Header = () => {
    return (
        <header>
            <div className="flex-container menu">
                <div>
                    <h1>FlexTurismos</h1>
                </div>
                <ul className="list-itens">
                    <li><a href="#quem-somos">Quem Somos</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#planos">Planos</a></li>
                </ul>
            </div>
        </header>
    );
};


export default Header;
