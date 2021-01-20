class Dustbin{

    constructor(x,y,width,height){

        var option = {
        isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        this.body.x= x;
        this.body.y = y;

        World.add(world, this.body);

        this.left = Bodies.rectangle(this.body.x - 50,this.body.y,width,height,option);
        this.left.width = width;
        this.left.height = height;
        World.add(world, this.left);

        this.right = Bodies.rectangle(this.body.x + 50,this.body.y,width,height, option);
        this.right.width = width;
        this.right.height = height;
        World.add(world, this.right);

        this.base = Bodies.rectangle(this.body.x, this.body.y  + this.body.y/10, 100,width, option);
        this.base.width = 100;
        this.base.height = width;
        World.add(world, this.base);

        this.image = loadImage("dustbingreen3.png");
        this.image.scale = 0.5;


    }

    display(){

        var pos = this.right.position;
        var pos2 = this.base.position;
        var pos3 = this.left.position;
        var posb = this.body.position;

      push()
      translate(pos.x,pos.y);
      rectMode(CENTER);
      noFill();
      noStroke();
      rect(0,0,this.right.width,this.right.height);
      pop()

      push()
      translate(pos2.x,pos2.y);
      rectMode(CENTER);
      noFill();
      noStroke();
      rect(0,0,this.base.width,this.base.height);
      pop()

      push()
      translate(pos3.x,pos3.y);
      rectMode(CENTER);
      noFill();
      noStroke();
      rect(0,0,this.left.width,this.left.height);
      pop()

      push()
      translate(posb.x, posb.y);
      imageMode(CENTER);
      this.image.scale = 0.5;
      image(this.image,0,0,this.body.width, this.body.height);
      pop()


    }

}