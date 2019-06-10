import React from 'react';
import image from './missile.png.png'
import missileSound from './Missile launch Sound effect.mp3'
import Missile from './Missile'
import AntiMissile from './AntiMissile'
class Canvas extends React.Component {
    constructor(props){
        super(props)
        this.canvasRef=React.createRef();
        this.launchSoundRef=React.createRef();

    }
    audio = new Audio(missileSound)
    componentDidMount() {
        this.canvas = this.canvasRef.current;
        this.badRocket= new Missile(1,800-128);
        this.goodRocket=new AntiMissile(1750-128,800-128);
        const context = this.canvas.getContext("2d") //link the canvas
        this.img= new Image();
        this.img.onload=()=>{
            context.drawImage(this.img, 1, 800-128);;
            context.drawImage(this.img,1750-128,800-128);
        }
        this.img.src=image;
        context.fillStyle = 'blue';
        context.fillRect(0,0,this.canvas.clientWidth ,this.canvas.clientHeight); //draw the rectangle
    }
    startMove=()=>{
        let interval=this.badRocket.launch(
            -15);
        this.audio.play();
        this.drawStatus()
}
     drawStatus=()=> {
         setInterval(() => {
             const context = this.canvas.getContext("2d");
             context.clearRect(0, 0, this.canvas.width, this.canvas.height);
             context.fillStyle = 'blue';
             this.goodRocket.follow(this.badRocket.x, this.badRocket.y)
             context.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight); //draw the rectangle
             context.drawImage(this.img, this.goodRocket.x, this.goodRocket.y)
             context.drawImage(this.img, this.badRocket.x, this.badRocket.y)
         }, 1);
     }
stopMove(){}
    render() {
        return(
            <div>
                <canvas ref={this.canvasRef} width={1750} height={800} />
                <div>
                    <button onClick={()=>{this.startMove();}}>Start</button>
                    <button onClick={()=>this.stopMove}>Stop</button>
                </div>
            </div>
        )
    }
}

export default Canvas