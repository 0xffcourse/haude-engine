class Game{

    window;
    debugMode;

    world;
    screen;

    frame;

    constructor(
        window,
        canvasId,
        contextType = "2d",
        debugMode = false
    ){
        this.window = window;
        this.debugMode = debugMode;

        this.world = new World();
        var canvas = window.document.getElementById(canvasId);
        this.screen = new Screen(this, canvas, contextType, debugMode);
        
        this.frame = 0;

        this.eventLoop = this.eventLoop.bind(this);
    }

    start(){
        this.eventLoop();
    }

    eventLoop(){
        //clear the screen
        this.screen.clear();
        
        //increment of frame by 1 
        this.frame += 1;
        
        //update world: collision detection, apply physics, etc.
        this.world.update();

        //draw the updated world in screen
        this.screen.draw(this.world);

        //loop
        requestAnimationFrame(this.eventLoop);
    }
}
