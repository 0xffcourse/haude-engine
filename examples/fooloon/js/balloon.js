class Balloon extends Entity{
    constructor(sprite, game, xPos, yPos, yVelocity){
        super(sprite, game, xPos, yPos);
        this.yVelocity = yVelocity;
    }
    applyPhysics(){
        super.applyPhysics();
    }
}