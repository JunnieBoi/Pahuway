let j = 1;
let n = 0;
let recorder = 0;



function music_trigger(event)
{
  if(event.keyCode == "77")
  {
    if(document.querySelector("#firsttransition").paused == true)
    {
      document.querySelector("#firsttransition").play();
    }
    else
    {
    document.querySelector("#firsttransition").load();
    document.querySelector("#firsttransition").pause();

    }
  }
}
function redirect(event)
{
  if(event.keyCode == "32")
  {
    window.location.href = "/home";
  }
}

function redirect1()
{

    window.location.href = "/home";
}
document.querySelector('#transition7').style.visibility = 'hidden';
function slow_appear(classname,seconds)
{
  window.setInterval(function(){
    document.querySelector(classname).style.visibility = 'visible'},seconds);
}

function blink()
{
  if(document.querySelector('#blinker').style.visibility === 'hidden')
  {
    document.querySelector('#blinker').style.visibility = 'visible';
  }
  else
  {
    document.querySelector('#blinker').style.visibility = 'hidden';
  }
}

function lambda()
{
  window.setInterval(blink,2000);
}


for(j = 1; j <= 3;j++)
{
  let k = 3000 * j;
  let stringparser = "#transition" + j;
  slow_appear(stringparser,k);
  if(j == 2)
  {
    slow_appear('#transition8',k + 1000);

window.addEventListener("keydown",music_trigger);
  }
  recorder = k;
}
recorder += 2000;
slow_appear("#transition7",recorder);

for(let l = 4; l <= 6; l++)
{
  let m = 3000 * l + 2000;
  slow_appear("#transition" + l,m);
  n = m;
}
window.setTimeout(lambda,n);
window.setTimeout(function(){window.addEventListener("keydown",redirect);},n);
window.setTimeout(function(){window.addEventListener("click", redirect1);},n);



