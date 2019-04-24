var timer_tag = document.getElementById('timer');
var timer = timer_tag.innerHTML;
timer = parseInt(timer);
setInterval(function(){
  if (timer != 0){
    timer = timer - 1;
    timer_tag.innerHTML = timer;
  }else {
    var title = document.getElementById('title');
    document.body.style.backgroundColor = "red";
    title.innerHTML = 'BOOOM';
  }
}, 1000);
