class Pistol extends Entity{
    constructor(sprite, game, xPos, yPos){
        super(sprite, game, xPos, yPos);
        this.gunAudio = document.getElementById("gunAudio");
    }
    shoot(){
        var bullet = new Entity("sprites/bullet.png", this.game, this.xPos, this.yPos);
        bullet.xVelocity = 11;
        this.game.entities.push(bullet);
        this.gunAudio.currentTime = 0;
        gunAudio.pause();
        gunAudio.play();
    }
    applyPhysics(){
        //keep pistol in the screen
        if((this.yPos+this.yVelocity)<0
        ||(this.yPos+this.yVelocity+40)>(this.game.height)
        ) this.yVelocity=0;
        super.applyPhysics(this.game);
    }
}