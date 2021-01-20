class Plate{

    constructor(x, y, width, height){
  
     var option = {
  
      isStatic : true
  
     }
  
     this.body = Bodies.rectangle(x, y, width, height, option);
     World.add(world, this.body);
  
     this.height = height;
     this.width = width;
  
    }
  
    display(){
  
      var pos = this.body.position;
  
      push()
     rectMode(CENTER);
     noFill();
     noStroke();
     rect(pos.x,pos.y, this.width, this.height);
     pop()
  
  
    }
  
  };