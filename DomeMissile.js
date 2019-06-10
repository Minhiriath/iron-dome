
class DomeMissile{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.startx=x
        this.starty=y;
    }

    //velocity in pixels per second

follow(x1,y1){
        let x2=this.x;
        let y2=this.y;
        let angle=Math.atan((y1-y2)/(x1-x2))*(180/Math.PI);
        this.x=x2-(4*Math.cos(angle*(Math.PI/180)));
        this.y=y2-(4*Math.sin(angle*(Math.PI/180)));

        console.log("Angle:"+angle);
    }

}


export default DomeMissile;