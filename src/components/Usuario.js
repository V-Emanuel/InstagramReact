import React, { useState } from "react";
export default function Usuario(){
  const usuario = [{imagem: "assets/img/catanacomics.svg", name:"catanacomics", subname:"catana"}];
    return (
        <div data-test="user" class="usuario">
          {usuario.map((item) => <User imagem={item.imagem} name={item.name} subname={item.subname}/> )}
        </div>
    );
}
function User(props){

  const imagemPadrao = props.imagem;
  const nomePadrao = props.subname;
  const [nome, setNome] = React.useState("");
  const [imagem, setImagem] = useState(imagemPadrao)

  function inserirNome() {
      setNome(prompt("Qual é o seu nome?"))
  }

  function inserirImagem() {
      const imagemAdicionada = prompt("Escolha o link da sua imagem")
      setImagem(imagemAdicionada)
  } 
  return (
    <>
    <img data-test="profile-image" onClick={inserirImagem} src={!imagem ? imagemPadrao : imagem} />
          <div class="texto">
            <strong>{props.name}</strong>
            <span data-test="name">
            {!nome ? nomePadrao : nome}
              <ion-icon data-test="edit-name" onClick={inserirNome} name="pencil"></ion-icon>
            </span>
          </div>
    </>
  );
}