class World{

    gravity;
    entities;

    constructor(gravity){
        this.gravity = gravity;
        this.entities = [];
    }

    update(){
        for(const entity of this.entities){
            Kinematics.compute(entity, this.gravity);
        }
    }
}
