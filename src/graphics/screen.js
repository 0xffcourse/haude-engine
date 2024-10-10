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
                this.context.strokeStyle = "red";
                this.context.strokeRect(entity.position[0],entity.position[1],entity.size[0],entity.size[1]);
            }
        }
    }
}
