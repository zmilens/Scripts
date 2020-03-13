let points = 0;
let n = 1;

setInterval(()=>{
  n = Math.round((Math.random()*10));
  var box = 'c'+n;
  document.getElementById(box).innerHTML = "<div class='colorbox'></div>";

  var time = setTimeout(() => {
	  document.getElementById(box).innerHTML = " ";
	}, 200);
}, 800);

function Check(box){
  if(box === n){
    points++;
  }
  else if(points>0){
    points--;
  }
  document.getElementById('status').innerHTML = 'У тебя ' + points +' очков';
}