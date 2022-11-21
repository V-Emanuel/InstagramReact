export default function Posts(){
  const post = [{imgUsuario:"assets/img/meowed.svg", nome:"meowed", imgConteudo:"assets/img/gato-telefone.svg", imgCurtida: "assets/img/respondeai.svg",
                   icon1: "ellipsis-horizontal",icon2:"heart-outline", icon3:"chatbubble-outline", icon4:"paper-plane-outline", icon5:"bookmark-outline"},
                   {imgUsuario:"assets/img/barked.svg", nome:"barked", imgConteudo:"assets/img/dog.svg", imgCurtida:"assets/img/adorable_animals.svg",
                   icon1: "ellipsis-horizontal",icon2:"heart-outline", icon3:"chatbubble-outline", icon4:"paper-plane-outline", icon5:"bookmark-outline"}];
    return (
        <div>
            <div class="posts">
            {post.map((item) => <Post imgUsuario={item.imgUsuario} nome={item.nome} imgConteudo={item.imgConteudo} imgCurtida={item.imgCurtida}
              icon1={item.icon1} icon2={item.icon2} icon3={item.icon3} icon4={item.icon4} icon5={item.icon5}/> )}
        </div>
        </div>
    )
}
function Post(props){
  return (
    <div data-test="post" class="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.imgUsuario} />
                {props.nome}
              </div>
              <div class="acoes">
                <ion-icon name={props.icon1}></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img data-test="post-image" src={props.imgConteudo}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon data-test="like-post" name={props.icon2}></ion-icon>
                  <ion-icon name={props.icon3}></ion-icon>
                  <ion-icon name={props.icon4}></ion-icon>
                </div>
                <div>
                  <ion-icon data-test="save-post" name={props.icon5}></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.imgCurtida} />
                <div data-test="likes-number" class="texto">
                  Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
              </div>
            </div>
          </div>
  );
}
