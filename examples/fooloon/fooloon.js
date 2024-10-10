class Fooloon extends Game{
    start(){
        super.start();
        this.world.gravity = 5;
        class Bullet extends Entity{

        }
        class Gun extends Entity{
            shoot(){
                let bullet = new Bullet(this.world, 1, 0, [this.position[0], this.position[1]], [20,5], {}, "DEFAULT", [15,0]);
                this.world.entities.push(bullet);
            }
        };
        let gun = new Gun(this.world, 10, 0, [20,20], [100,100]);
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
};

window.onload = async function(){
    fooloon = new Fooloon(window, "fooloonCanvas", "2d", true);
    fooloon.start();
}
