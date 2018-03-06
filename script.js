/*This part is just calling all the varialbes, these are the most important parts*/
var Space = false
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var Wk = false
var Ak = false
var Win = false
var winTime = 0
var Sk = false
var wins = 0
var Dk = false
var plrX = 0
var plrY = 490
var jump = 0
var horz = 0
var charge = 0
var time = 0
var block = false
var level = 0
var blockC = 0
var goal = [210,320]
var blockX = [50,60,70,80,90,100,110,120,130,60,70,80,90,100,110,120,130,140,0,10,20,30,40,140,140,140,140,140,140,140,140,150,160,170,180,190,200,210]
var blockY = [490,480,470,460,450,440,430,420,410,490,480,470,460,450,440,430,420,410,410,410,410,410,410,400,390,380,370,360,350,340,330,330,330,330,330,330,330,330]
function full_screen()
{
  // check if user allows full screen of elements. This can be enabled or disabled in browser config. By default its enabled.
  //its also used to check if browser supports full screen api.
  if("fullscreenEnabled" in document || "webkitFullscreenEnabled" in document || "mozFullScreenEnabled" in document || "msFullscreenEnabled" in document) 
  {
    if(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
    {
      

      var element = document.getElementById("canvas");
      //requestFullscreen is used to display an element in full screen mode.
      if("requestFullscreen" in element) 
      {
        element.requestFullscreen();
      } 
      else if ("webkitRequestFullscreen" in element) 
      {
        element.webkitRequestFullscreen();
      } 
      else if ("mozRequestFullScreen" in element) 
      {
        element.mozRequestFullScreen();
      } 
      else if ("msRequestFullscreen" in element) 
      {
        element.msRequestFullscreen();
      }

    }
  }
  else
  {
    
  }
}
//setInterval is like an internal clock that DOES NOT cause lag or break the program, it requires a funtion and a time in milliseconds, right here we have it running at 60 FPS
setInterval(function(){
  //frame
  time++
  ctx.fillStyle = "red"
  ctx.clearRect(0,0,500,500)
  ctx.fillRect(plrX,plrY,10,10)
  ctx.fillRect(goal[0],goal[1],10,10)
  
  for(var i = 0; i<wins; i++){
    ctx.fillStyle = "gold"
    ctx.fillRect(i*10+10,20,10,10)
  }
  
  if(plrX <= goal[0]+10 && plrX >= goal[0]-10&&plrY <= goal[1]+10 && plrY >= goal[1]-10){
    level++
    plrX = 0
    plrY = 490

    if(level == 1){
      plrX = 0
      plrY = 490
      jump = 0
      horz = 0
      goal = [80,390]
      blockX = [50,50,50,50,50,50,50,50,50,50,60,70,80]
      blockY = [490,480,470,460,450,440,430,420,410,400,400,400,400]
    }
    if(level == 2){
      plrX = 0
      plrY = 490
      jump = 0
      horz = 0
      goal = [60,290]
      blockX = [50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,60]
      //20
      blockY = [490,480,470,460,450,440,430,420,410,400,390,380,370,360,350,340,330,320,310,300,300]
    }
    if(level == 3){
      plrX = 0
      plrY = 490
      jump = 0
      horz = 0
      goal = [110,320]
      blockX = [50,50,50,50,50,50,50,50,50,60,70,80,80,80,80,80,80,60,50,40,40,40,40,60,70,80,90,100,110,80,80,80,40,40,40,40]
      //23
      blockY = [490,480,470,460,450,440,430,420,410,410,410,410,400,390,380,370,360,360,360,360,350,340,330,330,330,330,330,330,330,350,340,330,340,330,320,310]
    }
    if(level == 4){
      plrX = 0
      plrY = 490
      jump = 0
      horz = 0
      goal = [100,340]
      blockX = [50,60,70,80,90,100,60,60,60,60,60,60,60,60,60,60,60,60,60,60,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70]
      blockY = [350,350,350,350,350,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,360,370,380,390,400,410,420,430,440,450,460,470,480,490]
    }
    if(level == 5){
      plrX = 0
      plrY = 490
      jump = 0
      horz = 0
      goal = [310,190]
      blockX = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300]
      blockY = [490,480,470,460,450,440,430,420,410,400,390,380,370,360,350,340,330,320,310,300,290,280,270,260,250,240,230,220,210,200]
    }
    if(level == 6){
      wins++
      level = 0
      blockY = [490,480,470,460,450,440,430,420,410,490,480,470,460,450,440,430,420,410,410,410,410,410,410,400,390,380,370,360,350,340,330,330,330,330,330,330,330,330]
      blockX = [50,60,70,80,90,100,110,120,130,60,70,80,90,100,110,120,130,140,0,10,20,30,40,140,140,140,140,140,140,140,140,150,160,170,180,190,200,210]
      goal = [210,320]
      plrX = 0
      plrY = 490
      jump = 0
      horz = 0
    }
  }
  if(time % 20 == 0){
    if(charge != 10){
      charge++
    }
  }
  ctx.fillStyle = "#40f92f"
  for(var i = 1; i<charge+1;i++){
    if(charge >= i){
      ctx.fillRect(i*10,10,10,10)
    }
  }
  ctx.fillStyle = "black"
  ctx.fillRect(110,10,10,10)
  for(var i = 0; i<blockX.length;i++){

    ctx.fillRect(blockX[i],blockY[i],10,10)
    if(plrX <= blockX[i]+9 && plrX >= blockX[i]-9 && plrY >= blockY[i]-10&& plrY <= blockY[i]-5){
      plrY = blockY[i]-10
      block = true
      jump = 0
    }else{

      if(plrX <= blockX[i]-5 && plrX >= blockX[i]-10 && plrY >= blockY[i]-5&& plrY <= blockY[i]){
        plrX = blockX[i]-10
        horz = 0
      }else if(plrX <= blockX[i]+10 && plrX >= blockX[i]+5 && plrY >= blockY[i]-5&& plrY <= blockY[i]){
        plrX = blockX[i]+10
        horz = 0
      }else{
        blockC++
      }
      if(plrX <= blockX[i]+5 && plrX >= blockX[i]-5 && blockY[i]+10>= plrY&& blockY[i]+5<=plrY){
        plrY = blockY[i]+10
        jump = 0
      }
    }
    if(blockC == blockX.length){
      block = false
    }
  }
  horz = horz *.94
  if(plrY >= 490){
    plrY = 490
    jump = 0
  }else{
    if(block == false){
      jump += .3
    }
  }
  if(plrX > 490){
    plrX = 490
    horz = 0
  }
  if(plrX < 0){
    plrX = 0
    horz = 0
  }
  if(Wk == true){
    if(plrY == 490 || block == true){
      jump -= 5
    }
  }
  if(Space == true){
    if(plrY == 490 || block == true){
      jump -= 10
      charge = 0
    }
  }
  if(Dk == true){
    horz +=0.25
  }
  if(Ak == true){
    horz -=0.25
  }
  plrX += horz
  plrY += jump
  block = false
  Space = false
},1000/60)
//detects key presses
document.onkeydown = function(e){
  e = e||window.event
  if(e.keyCode == 32){
    if(charge == 10){

      Space = true
    }
  }
  if(e.keyCode == 9){
    alert(plrY.toString() + " " + horz.toString())
  }
  if(e.keyCode == 87){
    //w
    Wk = true
  }
  if(e.keyCode == 65){
    //a
    Ak = true
  }
  if(e.keyCode == 83){
    //s
    Sk = true
  }
  if(e.keyCode == 68){
    //d
    Dk = true
  }
  if(e.keyCode == 70){
    full_screen()
  }
}
document.onkeyup = function(e){
  e = e||window.event
  if(e.keyCode == 87){
    //w
    Wk = false
  }
  if(e.keyCode == 65){
    //a
    Ak = false
  }
  if(e.keyCode == 83){
    //s
    Sk = false
  }
  if(e.keyCode == 68){
    //d
    Dk = false
  }
}
