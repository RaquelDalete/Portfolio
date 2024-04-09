import React from 'react';
import Contador from './ImagensPortfolio/contador.png';
import Fogo from './ImagensPortfolio/thewitcher.png';
import * as S from './Style.jsx';


function Projetos() {

  const desafios = [
    {imagem: Contador , titulo: "Contador", link: "https://github.com/RaquelDalete/contador" , descricao: "Contador feito com React, UseState e Lógica"},
    {imagem: Fogo , titulo: "The Witcher ", link: "https://github.com/RaquelDalete/The-Witcher" , descricao: "Projeto realizado com Html, Css e Position"},     
]

  return (
<S.SectionP>
{desafios.map((item) => (
                <S.Div>
                    <a href={item.link} target="_blank">  <S.ImgP src={item.imagem} alt={item.titulo} />   </a>
                    <h2>{item.titulo}</h2>
                    <h3>{item.descricao}</h3>
                </S.Div>
            ))}
   </S.SectionP>

  );
}

export default Projetos;
