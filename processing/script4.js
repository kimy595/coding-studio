public class velocity{
    float delx, dely;
    
    //Constructor 1 
    public velocity(){}
    
    //Constructor 2
    public velocity(float delx, float dely){
      this.delx = delx;
      this.dely = dely;
    }
    
    //Mutators for xvelocity and y velocity
    public float getdelx(){
      return this.delx;
    }
    
    public float getdely(){
      return this.dely;
    }
    
    //Accessors for xvelocity and y velocity
    public void setdelx(float delx){
      this.delx = delx;
    }
    
    public void setdely(float dely){
      this.dely = dely;
    }
    
  }
    
  
  
  
  
  
  public class particle{
    
    private float xpos , ypos, delx , dely,size, decay, mass;
    color colour;
    
    //constructor 1
    public particle(float x, float y){
    this.xpos = x;
    this.ypos = y;
    }
    
    //constructor 2
    public particle(float xpos, float ypos, float size, float delx, float dely,float decay, float mass){
      this.xpos = xpos;
      this.ypos = ypos;
      this.size = size;
      this.delx = delx;
      this.dely = dely;
      this.decay = decay;
      this.mass = mass;
      
    }
    
    //Mutators for size, x velocity y velocity and velocity vector
    public void setsize(float size){
      this.size = size;
    }
    
    public void setDX(float delx){
      this.delx = delx;
    }
    
    public void setDY(float dely){
      this.dely = dely;
    }
    
    
  
    
    //Accessors for size, x position, y position, x velocity and y velocity
    
    public float getsize(){
      return this.size;
    }
    
    public float getX(){
      return this.xpos;
    }
    
    public float getY(){
      return this.ypos;
    }
     
    public float getDX(){
      return this.delx;
    }
    
    public float getDY(){
      return this.dely;
    }
    
    public float getmass(){
      return this.mass;
    }
    
    public velocity getvel(){
      
      velocity v = new velocity(this.getDX(), this.getDY());
      return v;
    }
      
    
    
    //Functionality. Moving around, Bouncing off of walls, and basic display updates
    public void move(){
      this.xpos += this.delx;
      this.ypos += this.dely;
    }
  
    public void bounce(){
      if((this.xpos - this.size/2.0) < 0 || (this.xpos + this.size/2.0) > width){
        this.setDX(this.getDX()*-(this.decay));
      }
      if((this.ypos - this.size/2.0) < 0 || (this.ypos + this.size/2.0) > height){
         this.setDY(this.getDY()*-(this.decay));
      }
    }
    
    public void update(particle[] elec){
      
      for(int i =0; i< elec.length; i++){
        
        if(this == elec[i]) continue;
        if(dist(this.getX(),this.getY(),elec[i].getX(),elec[i].getY()) - this.getsize() <0){
          collision(this, elec[i]);
          //println(dist(this.getX(),this.getY(),elec[i].getX(),elec[i].getY()) - this.getsize()/2);
        }
      }
      display();
    }
    
    public void display(){
      stroke(0);
      fill(119,240,153);   
      ellipse(this.xpos, this.ypos, this.size ,this.size);
    }
  }
  
  
  
  velocity rotate(velocity v, float angle){
    float x = v.getdelx()*cos(angle) - v.getdely()*sin(angle);
    float y = v.getdelx()*sin(angle) + v.getdely()*cos(angle);
    
    velocity vel = new velocity(x,y);
    return vel;
  }
  
  
  
  void collision(particle p1, particle p2){
    
    float xveldiff = p1.getDX()-p2.getDX();
    float yveldiff = p1.getDY()-p2.getDY();
    
    float xdist = p2.getX() - p1.getX();
    float ydist = p2.getY() - p1.getY();
    
    //Check for accidental overlaps of particles
    if(xveldiff*xdist + yveldiff*ydist > 0){
      
      float angle = -atan2(p2.getY() - p1.getY(), p2.getX() - p1.getY());
      
      float m1 = p1.getmass();
      float m2 = p2.getmass();
      
      velocity u1 = rotate(p1.getvel(),angle);
      velocity u2 = rotate(p2.getvel(),angle);
      
      velocity v1 = new velocity(u1.getdelx() * (m1 - m2) / (m1 + m2) + u2.getdelx() * 2 * m2 / (m1 + m2), u1.getdely());
      velocity v2 = new velocity(u2.getdelx() * (m1 - m2) / (m1 + m2) + u1.getdelx() * 2 * m2 / (m1 + m2), u2.getdely());
      
      velocity vf1 = rotate(v1, -angle);
      velocity vf2 = rotate(v2, -angle);
      
      p1.setDX(vf1.getdelx());
      p1.setDY(vf1.getdely());
      
      p2.setDX(vf2.getdelx());
      p2.setDY(vf2.getdely());
    }
  
  }
  
  
  
  
  And this is the main file :  
  
  
  
  particle[] elec = new particle[5];
  
  boolean record = false;
  
  void setup(){
    float x=0,y=0;
    int i,j;
    float diam = 100;
  
    size(800,400);
    
    //Initialising the particle objects
    for (int k = 0; k < elec.length; k++){
      x = random(width/10, width/1.2);
      y = random(height/10, height/1.2);
      elec[k] = new particle(x,y);
    }
    
    //Spawning at random places
    for ( i = 0; i < elec.length; i++){
   
     if (i!=0){
       
       for (  j = 0; j < elec.length; j ++){
  
         if (dist(x,y,elec[j].getX(),elec[j].getY()) <= diam){
           x = random(width/10, width/1.2);
           y = random(height/10, height/1.2);
           j = -1;
         }
       }
    }
      
      elec[i] = new particle(x,y,diam,4,4,1,2);
      
      
    }
    
  
  }
  void draw(){
    background(0);
    
    for (int i = 0; i < elec.length; i++){
      elec[i].update(elec);
      elec[i].move();
      elec[i].bounce();
      if(record){
        saveFrame("collide_#####.png");
        fill(255,0,0);
      } else {
        fill(0,255,0);
      }
      
      ellipse(width/1.01, height/1.01,5,5);
    }
  
  }
  
  void keyPressed(){
    if (key =='r' || key =='R'){
      record = !record;
    }
  }
  
  //float getdistance(float x, float y, float x1, float y1){
  //  return pow(pow((x-x1),2)+pow((y-y1),2),0.5);
  //}
    
  