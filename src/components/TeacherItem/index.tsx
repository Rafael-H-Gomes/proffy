import React from 'react';

import './styles.css'

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/68865878?s=60&v=4" alt="Rafael Gomes"/>
                <div>
                    <strong>Rafael Gomes</strong>
                    <span>Química</span>
                </div>
                </header>
                <p>
                    Entusiasta das melhores tecnologias de química avançada.
                    <br/><br/>
                    Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões. 
                </p>

                <footer>
                    <p>
                        Preço/hora
                        <strong>R$ 80,00</strong>
                    </p>
                    <button type="button">
                        <img src={WhatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
        </article>
    );
}

export default TeacherItem;