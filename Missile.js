class Missile{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.startx=x
        this.starty=y;
    }

    //velocity in pixels per second

    launch(angle){
        return setInterval(()=>{
            this.x+=2
        this.y=this.starty+this.x*Math.tan(angle*(Math.PI/180))
        console.log(this.x,this.y)},500)
    }

}
export default Missile;