class Paper{

   constructor(x, y){

    var option ={

      'restitution' : 0.8,
      'friction' : 15,
      'density' : 2,
      'isStatic' : false

    }

     this.body = Bodies.rectangle(x, y, 20, 20, option);

     World.add(world, this.body);
     
     this.image = loadImage("paper.png");
     this.width = 50;
     this.height = 50;
     
    


   }

   display(){

     var pos = this.body.position;

     push()
     translate(pos.x, pos.y);
     imageMode(CENTER);
     this.image.scale = width;
     image(this.image, 0, 0, this.width, this.height);
     pop()
     


   }

}