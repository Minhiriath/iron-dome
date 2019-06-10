class AntiMissile{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.angle=0;
    }

    //velocity in pixels per second

    follow(x,y){

        this.angle = ((1/Math.tan(((y-this.y)/(x-this.x)))));
        this.x=this.x-(4*Math.cos(this.angle));
        this.y=this.y-(4*Math.sin(this.angle));

        console.log(this.x,this.y,this.angle)
    }
}
export default AntiMissile;