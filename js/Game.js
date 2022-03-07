class Game {
  constructor() {}

  getState(){
   var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", (data) =>{
      gameState = data.val();
   })
  }

  update(state){
    database.ref("/").update({
      gameState: state
    })
  }

  start() {
    
    // crie uma instância de novo jogador
    player = new Player();
   
    // inicie a variável playerCount
    player.getCount();
    

    form = new Form();
    form.display();

    car1 = createSprite (width/2 - 50, height - 100);
    car1.addImage("car1",car1_img);
    car1.scale = 0.07;

    // siga o exemplo acima para criar o sprite de car2
    car2 = createSprite (width/2 - 50, height - 100);
    car2.addImage("car2",car2_img);
    car2.scale = 0.07;

    // atribua os objetos ao vetor cars
    cars = [car1,car2];
    

  }

  handleElements(){
    // adicione os estilos à imagem do título.
  }

  play () {

    //chame a função para esconder os elementos
    this.handleElements();

    //chame a função para criar os sprites
    drawSprites();
  
  }
}
