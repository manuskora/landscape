// put in setup whatever needs to be done to get things started
function setup() {

    // this line creates a virtual canvas and attaches it to your HTML

    createCanvas(719,560).parent('p5')
    noLoop()

    angleMode(DEGREES)
}

// put in draw everything you want to draw to the canvas
function draw() {

  var x
  var y
  var s=2
    // start off with a background
      background(200)
      strokeWeight(s)
      stroke(255,0,0)
      fill(255)

      // draw here!
      var w=width
      var h=height
  for(i=0;i<h*w/(pow(s,2));i++){
  x=(s*i)%w
  y=s*floor((i*s)/w)
  //spotlights
  if(pow(x-400,2)/pow(110,2)+pow(y-450,2)/pow(30,2)<=.8){
    stroke(135+int(random(100)),155+int(random(100)),155+int(random(100)))
  }
  else if(pow(x-400,2)/pow(110,2)+pow(y-450,2)/pow(30,2)<=1.2){
    stroke(67+int(random(100)),102+int(random(100)),77+int(random(100)))
  }
  else if(pow(x-400,2)/pow(300,2)+pow(y-600,2)/pow(90,2)<=1){
    stroke(135+int(random(100)),155+int(random(100)),155+int(random(100)))
  }
  //shadows
  else if(pow(x-550,2)/pow(550,2)+pow(y-450,2)/pow(90,2)<=1){
    stroke(int(random(100)),50+int(random(100)),int(random(100)))
  }
  else if(pow(x-450,2)/pow(500,2)+pow(y-550,2)/pow(100,2)<=1){
    stroke(int(random(100)),50+int(random(100)),int(random(100)))
  }
  else if(pow(x-650,2)/pow(200,2)+pow(y-300,2)/pow(30,2)<=1){
    stroke(int(random(100)),50+int(random(100)),int(random(100)))
  }
  //trees
  //six trees on right
  else if(y>50&&y<250&&x>575&&x<585){
    stroke(180+int(random(100)),120+int(random(100)),50+int(random(100)))
  }
  else if(y>50&&y<250&&x>600&&x<610){
    stroke(180+int(random(100)),120+int(random(100)),50+int(random(100)))
  }
  else if(y>50&&y<250&&x>625&&x<635){
    stroke(180+int(random(100)),120+int(random(100)),50+int(random(100)))
  }
  else if(y>50&&y<250&&x>650&&x<660){
    stroke(180+int(random(100)),120+int(random(100)),50+int(random(100)))
  }
  else if(y>50&&y<250&&x>675&&x<685){
    stroke(180+int(random(100)),120+int(random(100)),50+int(random(100)))
  }
  else if(y>50&&y<250&&x>700&&x<710){
    stroke(180+int(random(100)),120+int(random(100)),50+int(random(100)))
  }
  //curvy branched tree
  else if(x>=400+.1*y&&x<=415+.1*y&&y<=270&&y>=160){
    stroke(180+int(random(100)),120+int(random(100)),50+int(random(100)))
  }
  else if(x>=496-.5*y&&x<=511-.5*y&&y<=160&&y>=150){
    stroke(180+int(random(100)),120+int(random(100)),50+int(random(100)))
  }
  else if(x-421>=-.1*(y-140)&&x<=436&&y<=150&&(x-436)<=.7*(y-100)){
    stroke(180+int(random(100)),120+int(random(100)),50+int(random(100)))
  }
  else if((x-426)>=.7*(y-100)&&(x-436)<=.7*(y-100)&&x<=436&&y>=40){
  stroke(180+int(random(100)),120+int(random(100)),50+int(random(100)))
  }
  //tree leaves
  else if(y<90+40*sin(4*x)&&x>=250){
    stroke(80+int(random(100)),200+int(random(100)),0+int(random(100)))
  }
  //tree shadows
  else if(y<=130&&x>=250){
    stroke(50+int(random(100)),150+int(random(100)),0+int(random(100)))
  }
  //grass
  else if(y>=400-(x/2)&&y>150){
    stroke(y/4+int(random(100))+60,y/4+80+int(random(100)),y/3-30)
  }
  else if(y>=300-(x/3)&&x>=150&&y>150){
  stroke(y/4+int(random(100))+60,y/4+80+int(random(100)),y/3-30)
  }
  //water
  else if(y>150){
    stroke(50+int(random(100)+y/4),155+int(random(50))+y/4,205+int(random(50)))
  }
  //sand
  else if(y>130){
    stroke(205+int(random(50)),205+int(random(50)),100+int(random(50)))
  }
  //sky
  else{
  stroke(205+int(random(50)),205+int(random(50)),205+int(random(50)))
  }
  point(x,y)
  }


  //signature
  noFill()
  strokeWeight(10)
  stroke(0)
  translate(620,480)
  scale(.2)
  beginShape()
  curveVertex(100,300)
  curveVertex(10,150)
  curveVertex(10,300)
  curveVertex(100,150)
  curveVertex(100,300)
  curveVertex(10,150)
  curveVertex(10,300)
  endShape()
  beginShape()
  curveVertex(110,300)
  curveVertex(155,150)
  curveVertex(200,300)
  curveVertex(140,270)
  curveVertex(155,180)
  curveVertex(170,270)
  curveVertex(110,300)
  curveVertex(155,150)
  curveVertex(200,300)
  endShape()
  beginShape()
  curveVertex(210,300)
  curveVertex(255,150)
  curveVertex(300,300)
  curveVertex(255,250)
  curveVertex(210,300)
  curveVertex(255,150)
  curveVertex(300,300)
  endShape()
  beginShape()
  curveVertex(310,150)
  curveVertex(310,300)
  curveVertex(400,300)
  curveVertex(400,150)
  curveVertex(355,250)
  curveVertex(310,150)
  curveVertex(310,300)
  curveVertex(400,300)
  endShape()


  }




// this function will print coordinates to the console whenever you click
function mouseClicked() {
    print(int(mouseX), int(mouseY))
}
