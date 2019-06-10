import React from 'react';
import image from './missile.png.png'
import Missile from './Missile'
import DomeMissile from './DomeMissile'
class Canvas extends React.Component {
    constructor(props){
        super(props)
        this.canvasRef=React.createRef()

    }

    componentDidMount() {
        this.canvas = this.canvasRef.current;
        this.badRocket= new Missile(1,350);
        const context = this.canvas.getContext("2d") //link the canvas
        this.img= new Image();
        this.img.onload=()=>{
            context.drawImage(this.img, 1, 350);
        }
        this.img.src=image;
        context.fillStyle = 'blue';
        context.fillRect(0,0,this.canvas.clientWidth ,this.canvas.clientHeight); //draw the rectangle
    }
    startMove=()=>{
        let interval=this.badRocket.launch(15);
        this.drawStatus()
}
     drawStatus=  ()=>{
        const context=this.canvas.getContext("2d");
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        console.log("clear")
        context.fillStyle = 'blue';
        context.fillRect(0,0,this.canvas.clientWidth ,this.canvas.clientHeight); //draw the rectangle
         context.drawImage(this.img,this.badRocket.x,this.badRocket.y)
        console.log("painted")

}
stopMove(){}
    render() {
        return(
            <div>
                <canvas ref={this.canvasRef} width={1750} height={800} />
                <div>
                    <button onClick={()=>this.startMove()}>Start</button>
                    <button onClick={()=>this.stopMove}>Stop</button>
                </div>
            </div>
        )
    }
}

export default Canvas