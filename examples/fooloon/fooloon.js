class Fooloon extends Game{
    start(){
        super.start();
        //negative gravity, only to apply over balloons that fly!
        this.world.gravity = -0.05;
        class Bullet extends Entity{

        }
        class Gun extends Entity{
            shoot(){
                let bullet = new Bullet(
                    this.world,
                    1,
                    0,
                    [this.position[0], this.position[1]],
                    [20, 5],
                    {},
                    "DEFAULT",
                    [15, 0],
                    [0, 0],
                    false
                );
                this.world.entities.push(bullet);
            }
        };
        class Balloon extends Entity{

        };
        this.Balloon = Balloon;
        let gun = new Gun(
            this.world,
            10,
            0,
            [20, 20],
            [100, 100],
            {},
            "DEFAULT",
            [0, 0],
            [0, 0],
            false
        );
        this.world.entities.push(gun);
        this.keyboard.keyPressed = function(key){
            switch(key){
                case "ArrowUp":
                    gun.velocity[1] = -5;
                    break;
                case "ArrowDown":
                    gun.velocity[1] = 5;
                    break;
                case " ":
                    gun.shoot();
                    break;
                default:
                    break;
            }
        };
        this.keyboard.keyReleased = function(key){
            gun.velocity[1] = 0;
        }
    }
    eventLoop(){
        super.eventLoop();
        if(!(this.frame%150)){
            let balloon = new this.Balloon(
                this.world,
                1,
                0,
                [150+(Math.random()*800), 700],
                [50, 50],
            );
            this.world.entities.push(balloon);
        }
    }
};

window.onload = async function(){
    fooloon = new Fooloon(window, "fooloonCanvas", "2d", true);
    fooloon.start();
}
