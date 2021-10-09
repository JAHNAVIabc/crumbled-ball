class Paper{

         constructor(){
           var options={

            istatic:false,
            restitution:0.3,
            friction:0,
            density:1.2,
      }

this.body=Bodies.circle(200,450,70,options)
this.r=70
this.image=loadImage("paper.png")
World.add(world,this.body);
 }

 display()
 {
     var pos=this.body.position;	
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,this.r, this.r)
}


}