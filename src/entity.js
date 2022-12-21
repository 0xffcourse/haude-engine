class Entity{
    constructor(sprite, xPos=0, yPos=0, xVelocity=0, yVelocity=0, mass=0, xAcceleration=0, yAcceleration=0){
        this.sprite = sprite;
        this.xPos = xPos;
        this.yPos = yPos;
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
        this.xAcceleration = xAcceleration;
        this.yAcceleration = yAcceleration;
    }
    applyPhysics(){
        this.xPos += this.xVelocity + (this.xAcceleration/2);
        this.yPos += this.yVelocity + (this.yAcceleration/2);
        this.xVelocity += this.xAcceleration;
        this.yVelocity += this.yAcceleration;
    }
}