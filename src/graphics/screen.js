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
                let randomRed = Math.random()*255;
                let randomGreen = Math.random()*255;
                let randomBlue = Math.random()*255;
                this.context.strokeStyle = `rgba(${randomRed},${randomGreen},${randomBlue},1)`;
                this.context.strokeRect(entity.position[0],entity.position[1],entity.size[0],entity.size[1]);
            }
        }
    }
}
