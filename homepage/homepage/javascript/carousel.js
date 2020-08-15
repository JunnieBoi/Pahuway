function buttonDeterminer(input)
{
  if(input == 0)
  {
    $("#AnimeMusicCarousel").fadeOut(5000);
    $("#LofiMusicCarousel").fadeOut(5000);
     if(document.querySelector("#AnimeMusicCarousel").style.display == "none" && document.querySelector("#LofiMusicCarousel").style.display == "none")
    {
       $("#IndieMusicCarousel").fadeIn(4000);
    }
    else
    {
       $("#IndieMusicCarousel").delay(5000).fadeIn(4000);
    }


  }
  if(input == 1)
  {
    $("#IndieMusicCarousel").fadeOut(5000);
    $("#LofiMusicCarousel").fadeOut(5000);
    if(document.querySelector("#IndieMusicCarousel").style.display == "none" && document.querySelector("#LofiMusicCarousel").style.display == "none")
    {
       $("#AnimeMusicCarousel").fadeIn(4000);
    }
    else
    {
      $("#AnimeMusicCarousel").delay(5000).fadeIn(4000);
    }


  }
  if(input == 2)
  {
    $("#IndieMusicCarousel").fadeOut(5000);
    $("#AnimeMusicCarousel").fadeOut(5000);

      if(document.querySelector("#AnimeMusicCarousel").style.display == "none" && document.querySelector("#IndieMusicCarousel").style.display == "none")
    {
       $("#LofiMusicCarousel").fadeIn(4000);
    }
    else
    {
      $("#LofiMusicCarousel").delay(5000).fadeIn(4000);
    }


  }

}

$(document).ready(function(event){

$("#IndieMusicCarousel").hide();
$("#AnimeMusicCarousel").hide();
$("#LofiMusicCarousel").hide();




});