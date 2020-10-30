class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
//empty array to store the bird position
//array= data structure or a variable which can store more than one value in a single variable =[1, 2, 3]
//index or osition inside the array always starts with a zeroand ends with length - 1
    this.smokeImage= loadImage("sprites/smoke.png");
this.trajectory= [];
  }
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
//reduce the number of smoke 
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      //store the bird position 
      var position= [this.body.position.x, this.body.position.y];
      //store position in the trajectory array [[]]= array inside an array
this. trajectory.push(position)
    }
    //attach the smoke image to the bird position
for(var i=0; i< this.trajectory.length; i= i+1){
image(this.smokeImage, this. trajectory[i][0], this.trajectory[i][1])
}
  }
}
