class Screen{

    game;
    canvas;
    context;
    debugMode;

    constructor(game, canvas, contextType, debugMode){
        this.game = game;
        this.canvas = canvas;
        this.context = canvas.getContext(contextType);
        this.debugMode = debugMode;
    }

    clear(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    draw(world){
        let entities = world.entities; 
        for(let i = 0; i < entities.length; i++ ){
            let entity = entities[i];
            if(this.debugMode){
                this.context.strokeStyle = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`;
                this.context.strokeRect(entity.position[0],entity.position[1],entity.size[0],entity.size[1]);
            }
            if(entity.drawable && entity.spriteMap && entity.spriteMap[entity.state]){
                this.context.drawImage(entity.spriteMap[entity.state], entity.position[0], entity.position[1]);
            }
        }
    }
}
