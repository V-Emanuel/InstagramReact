export default function Usuario(){
  const usuario = [{imagem: "assets/img/catanacomics.svg", nome:"catanacomics", subnome:"Catana"}];
    return (
        <div class="usuario">
          {usuario.map((item) => <User imagem={item.imagem} nome={item.nome} subnome={item.subnome}/> )}
        </div>
    );
}
function User(props){
  return (
    <>
    <img src={props.imagem} />
          <div class="texto">
            <strong>{props.nome}</strong>
            <span>
              {props.subnome}
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
    </>
  );
}