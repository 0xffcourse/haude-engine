class Entity{

    mass;
    epoch;
    position;
    size;
    spriteMap;

    state;
    velocity;
    acceleration;
    
    gravitable;
    visible;
    drawable;

    constructor(
        mass,
        epoch,
        position = [0, 0],
        size = [0, 0],
        spriteMap,

        state = "DEFAULT",
        velocity = [0, 0],
        acceleration = [0, 0],
        
        gravitable = true,
        visible = true,
        drawable = true,

    ){
        this.mass = mass;
        this.epoch = epoch;
        this.position = position;
        this.size = size;
        this.spriteMap = spriteMap;

        this.state = state;
        this.velocity = velocity;
        this.acceleration = acceleration;
        
        this.gravitable = gravitable;
        this.visible = visible;
        this.drawable = drawable;
    }
}
