class Fooloon extends Game{
    keyDownHandler(keyEvent){
        switch(keyEvent.key){
            case " ":
                this.shoot();
                break;
            case "ArrowUp":
                this.pistol.yVelocity = -5;
                break;
            case "ArrowDown":
                this.pistol.yVelocity = 5;
                break;
        }
        console.log(keyEvent.key);
    }
    keyUpHandler(keyEvent){
        this.pistol.yVelocity = 0; 
    }
    shoot(){
        var bullet = new Entity("sprites/bullet.png", this.pistol.xPos, this.pistol.yPos);
        bullet.xVelocity = 11;
        this.entities.push(bullet);
        var gunAudio = document.getElementById("gunAudio")
        gunAudio.pause();
        gunAudio.play();
    }
    spawninitial(){
        class Pistol extends Entity{
            applyPhysics(game){
                if((this.yPos+this.yVelocity)<0
                ||(this.yPos+this.yVelocity+40)>(game.height)
                ) this.yVelocity=0;
                super.applyPhysics(game);
            }
        }
        this.pistol = new Pistol("sprites/pistol.png", 0 ,240);
        this.entities.push(this.pistol);
        // for(var i=0; i<5; i++){
        //     var balloon = new GameObject("sprites/balloon.png", (i*80)+200-i*i , 400);
        //     balloon.yVelocity= -0.5;
        //     this.gameObjects.push(balloon);
        // }
    }
}