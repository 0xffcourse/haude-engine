class Kinematics{
    static compute(entity, gravity){
        entity.position[0] += entity.velocity[0];
        entity.position[1] += entity.velocity[1];
        entity.velocity[0] += entity.acceleration[0];
        entity.velocity[1] += entity.acceleration[1];
        if(entity.gravitable){
            entity.acceleration[1] = gravity;  
        }
    }
}
