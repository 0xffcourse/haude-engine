class Fooloon extends Game{
    start(){
        super.start();
        var gun = new Entity(10, 0, [20,20], [100,100]);
        this.world.entities.push(gun);
    }
};

window.onload = async function(){
    fooloon = new Fooloon(window, "fooloonCanvas", "2d", true);
    fooloon.start();
}
