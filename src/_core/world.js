class World{

    gravity;
    entities;

    constructor(gravity){
        this.gravity = gravity;
        this.entities = [];
    }

    update(){
        for(const entity of this.entities){
            entity.position[0] += entity.velocity[0];
            entity.position[1] += entity.velocity[1];
            entity.velocity[0] += entity.acceleration[0];
            entity.velocity[1] += entity.acceleration[1];
        }
    }
}
