class Entity{

    world;
    mass;
    epoch;
    position;
    hitBoxDeviant;
    spriteMap;

    state;
    velocity;
    acceleration;
    
    gravitable;
    visible;
    drawable;

    constructor(
        world,
        mass,
        epoch,
        position = [0, 0],
        hitBoxDeviant = [0, 0, 0, 0],
        spriteMap,

        state = "DEFAULT",
        velocity = [0, 0],
        acceleration = [0, 0],
        
        gravitable = true,
        visible = true,
        drawable = true,

    ){
        this.world = world;
        this.mass = mass;
        this.epoch = epoch;
        this.position = position;
        this.hitBoxDeviant = hitBoxDeviant;
        this.spriteMap = spriteMap;

        this.state = state;
        this.velocity = velocity;
        this.acceleration = acceleration;
        
        this.gravitable = gravitable;
        this.visible = visible;
        this.drawable = drawable;
    }
}
