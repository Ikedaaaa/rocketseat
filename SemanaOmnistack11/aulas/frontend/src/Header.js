import React from 'react';                  //Se no App.js usasse título como atributo de Header, usaria props
                                            //como parâmetro, que no return ficaria {props.title} dentro do h1
export default function Header({children}){ //Como no App.js o titulo é usado entre as tags de header, titulo vira children de header
    return (                                //assim, no parametro pode-se usar desestruturação pegando apenas children entre chaves
        <header>                                
            <h1>{children}</h1>
        </header>
    );
}
