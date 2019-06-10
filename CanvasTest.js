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
        this.state={
            counter: 0,
            badRocketAngle:-10
        }

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
        context.font= "60px Arial";
        this.img.src=image;
        context.fillStyle="blue";
         context.fillRect(0,0,this.canvas.clientWidth ,this.canvas.clientHeight); //draw the rectangle
        context.fillStyle="white";
        context.fillText("Total Hits="+this.state.counter, 100, 100);


    }
    startMove=()=>{
        this.interval=this.badRocket.launch(-this.state.badRocketAngle);
        this.audio.play();
        this.drawStatus()
}
     drawStatus=()=> {
         this.drawInterval=setInterval(() => {
             const context = this.canvas.getContext("2d");
             context.clearRect(40, 0, this.canvas.width, this.canvas.height-40);
             context.fillStyle = 'blue';
             this.goodRocket.follow(this.badRocket.x, this.badRocket.y)
             context.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight); //draw the rectangle
             context.font= "60px Arial";
             context.fillStyle="white";
             context.fillText("Total Hits="+this.state.counter, 100, 100);
             context.drawImage(this.img, this.goodRocket.x, this.goodRocket.y);
             context.drawImage(this.img, this.badRocket.x, this.badRocket.y);
             if((this.badRocket.x-this.goodRocket.x)**2+(this.badRocket.y-this.goodRocket.y)**2<180){
                 this.setState({counter:counter++})
             }
         }, 1);
     }
reset=()=> {
    const context = this.canvas.getContext("2d");
    clearInterval(this.interval)
    clearInterval(this.drawInterval)
    this.badRocket = new Missile(1, 800 - 128);
    this.goodRocket = new AntiMissile(1750 - 128, 800 - 128);
        context.drawImage(this.img, 1, 800 - 128);
        context.drawImage(this.img, 1750 - 128, 800 - 128);
    context.font = "60px Arial";
    this.img.src = image;
    context.fillStyle = "blue";
    context.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight); //draw the rectangle
    context.fillStyle = "white";
    context.fillText("Total Hits=" + this.state.counter, 100, 100);
}
stopMove=()=>{
    this.setState({counter:0});
    this.reset()
}
    render() {
        return(
            <div>
                <canvas ref={this.canvasRef} width={1750} height={800} />
                <div>
                    <button onClick={()=>{this.startMove();}}>Start</button>
                    <button onClick={()=>this.stopMove()}>Stop</button>
                </div>
            </div>
        )
    }
}

export default Canvas