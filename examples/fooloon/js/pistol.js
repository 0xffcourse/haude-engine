class Pistol extends Entity{
    constructor(sprite, game, xPos, yPos){
        super(sprite, game, xPos, yPos);
        this.gunAudio = document.getElementById("gunAudio");
        this.reloadAudio = document.getElementById("reloadAudio");
        this.shootCount = 0;
        this.currentBullet = null;
        this.currentReload = null;
    }
    shoot(){
        //jam between bullets
        if(this.currentBullet && this.currentBullet.epoch<15)return;
        //jam after reload
        if(this.currentReload && this.currentReload.epoch<15)return;
        //reload
        if(this.shootCount==6){
            this.reloadAudio.currentTime = 0;
            this.reloadAudio.pause();
            this.reloadAudio.play();
            this.shootCount=0;
            this.currentReload = new Entity(null, this.game);
            this.currentReload.drawable = false;
            this.game.entities.push(this.currentReload);
            return;
        }
        this.currentBullet = new Entity("sprites/bullet.png", this.game, this.xPos, this.yPos);
        this.currentBullet.xVelocity = 11;
        this.game.entities.push(this.currentBullet);
        this.gunAudio.currentTime = 0;
        this.gunAudio.pause();
        this.gunAudio.play();
        this.shootCount += 1;
        return;
    }
    applyPhysics(){
        //keep pistol in the screen
        if((this.yPos+this.yVelocity)<0
        ||(this.yPos+this.yVelocity+40)>(this.game.height)
        ) this.yVelocity=0;
        super.applyPhysics(this.game);
    }
}