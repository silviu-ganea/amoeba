var mouse_x;
var mouse_y;
var ball_x;
var ball_y;
var context;
var canvas;
var ball_speed;

function init(){
  mouse_x = -1;
  mouse_y = -1;
  ball_x = 0;
  ball_y = 0;
  ball_speed = 3;
  context = $("#canvas")[0].getContext("2d");
  canvas = $("#canvas")[0];
}

function draw_ball(x, y, color){
  context.beginPath();
  context.arc(x, y, 30, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
  context.closePath();
}

function clearCanvas(){
  
  context.clearRect(0, 0, canvas.width, canvas.height);
}
function draw_mousePos(x, y, color){

  context.font = '40px Arial';
  context.fillStyle = color;
  context.fillText(mouse_x, x, y);
  context.fillText(ball_x, x, y+100);
}

function game_loop(){
  clearCanvas();
  update_ballPos();
  draw_ball(ball_x, ball_y, "orange");
  //draw_mousePos(100, 100, "green");
}

function update_ballPos(){
  if(ball_x < mouse_x){
    if(ball_x + ball_speed <= mouse_x){
      ball_x += ball_speed;
    }else{
      ball_x = mouse_x;
    }
  }else if(ball_x > mouse_x){
    if(ball_x - ball_speed >= mouse_x){
      ball_x -= ball_speed;
    }else{
      ball_x = mouse_x;
    }
  }

  if(ball_y < mouse_y){
    if(ball_y + ball_speed <= mouse_y){
      ball_y += ball_speed;
    }else{
      ball_y = mouse_y;
    }
  }else if(ball_y > mouse_y){
    if(ball_y - ball_speed >= mouse_y){
      ball_y -= ball_speed;
    }else{
      ball_y = mouse_y;
    }
  }
}

$(document).mousemove(function(event) {
  mouse_x = event.pageX;
  mouse_y = event.pageY;
});
