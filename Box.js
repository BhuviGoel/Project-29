class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    }
display(){
  fill (255)
  rect (this.body.position.x, this.body.position.y, 30, 40);
}
};
