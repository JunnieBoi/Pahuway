function contentDeterminer()
{
    if(document.body.title == "home")
    {
         for(let a = 0; a < 4; a++)
        {
            if(a <= 2)
            {
            setTimeout(function(){$(".hide").eq(a).show();},(a * 2000) + 6000);
            }
            else
            {
            setTimeout(function(){$(".hide").eq(a).show();},(a * 2300) + 6000);
            }
        }
            for(let a = 0; a < 4; a++)
        {

            setTimeout(function(){$(".hide").eq(a).fadeOut(7000);},19800);

        }
         for(let b = 0; b < 3; b++)
        {

            if(b == 2)
            {
                setTimeout(function(){
                    $(".hide").eq(b).fadeIn(5000);
                    window.scrollTo({ top:100,behavior: 'smooth'});
                }, (b* 2000) + 33000);
            }
            else
            {
                setTimeout(function(){$(".hide").eq(b).show();}, (b* 3000) + 33000);
            }
        }
        return 27100;
    }

    else if(document.body.title == "about")
    {
        for(let a = 0; a < 7; a++)
        {
                    if(a == 0)
                    {
                        setTimeout(function(){$(".hide").eq(a).show();},(a * 2000) + 6000);
                    }
                    else if (a == 1 || a == 2 )
                    {
                        setTimeout(function(){$(".hide").eq(a).show();},(a * 1500) + 6000);
                    }
                    else if (a == 6)
                    {
                        setTimeout(function(){$(".hide").eq(a).fadeIn(4000);},(a * 2000) + 6000);
                    }
                    else if (a == 3)
                    {
                        setTimeout(function(){$(".hide").eq(a).show();},(a * 2000) + 6000);
                    }
                    else if (a > 3)
                    {
                        setTimeout(function(){$(".hide").eq(a).show();},(a * 2000) + 6000);
                    }

            }

             for(let a = 0; a < 7; a++)
            {

                setTimeout(function(){$(".hide").eq(a).fadeOut(5000);},26000);

            }

             for(let a = 0; a < 7; a++)
            {

                setTimeout(function(){$(".hide").eq(a).fadeOut(5000);},26000);

            }

            for(let a = 0 ; a < 21; a++)
            {
                if(a == 20)
                {

                setTimeout(function(){$(".hide").eq(a).fadeIn(5000);
                window.scrollTo({ top:750,behavior: 'smooth'});},(a * 2000) + 40000);

                }

                else
                {

                setTimeout(function(){$(".hide").eq(a).show();},(a * 2000) + 40000);
                }

            }



        return 31000;
    }

    else if(document.body.title == "chillbox")
    {

         for(let a = 0; a < 4; a++)
        {

            setTimeout(function(){$(".hide").eq(a).show();},(a * 2000) + 6000);

        }
           for(let a = 0; a < 4; a++)
        {

            setTimeout(function(){$(".hide").eq(a).fadeOut(7000);},19500);

        }
        setTimeout(function(){$(".hide").eq(0).fadeIn(7000);},33000);
        return 26800;
    }
    else if(document.body.title =="musicrec")
    {
         for(let a = 0; a < 4; a++)
        {
            if(a <= 2)
            {
            setTimeout(function(){$(".hide").eq(a).show();},(a * 1500) + 6000);
            }
            else
            {
            setTimeout(function(){$(".hide").eq(a).fadeIn(7000);},(a * 2000) + 6000);
            }
            setTimeout(function(){$(".hide").eq(a).fadeOut(7000);},19500);
            setTimeout(function(){$(".hide").eq(0).fadeIn(5000);},30000);
        }
         return 25500;
    }
    else if(document.body.title == "credits")
    {
        for(let a = 0; a < 4; a++)
        {
            setTimeout(function(){$(".hide").eq(a).show();},(a * 2500) + 6000);
            setTimeout(function(){$(".hide").eq(a).fadeOut(7000);},21500);


        }
        for(let b = 0; b < 18; b++)
        {
             setTimeout(function(){$(".hide").eq(b).fadeIn(7000);},(b * 5500) + 35500);
        }
        return 28500;
    }

}

function iconTimer()
{
    if(document.body.title == "home")
    {
        return 15500;
    }
    else if (document.body.title == "about")
    {
        return 20000;
    }
     else if (document.body.title == "chillbox")
    {
        return 15200;
    }
    else if(document.body.title == "musicrec")
    {
        return 13900;
    }
    else if(document.body.title == "credits")
    {
        return 17000;
    }
}
let menutimer = 0;
let icontimervar = iconTimer();


$(document).ready(function(){

    $(".slowfadein").delay(icontimervar).fadeIn(5000);
    $(".fadein").delay(icontimervar + 5000).fadeIn(5000);
    setTimeout(function(){$(".hidden").show();},4000);
    menutimer = contentDeterminer();

        setTimeout(function(){$(".replacelater").hide();},menutimer);
         setTimeout(function()
         {
            $(".replacelater").html("<span class='header pink'><a href='/home'>Home</a> | <a href='/about'>About</a> | <a href='/chillbox'> Chill Box</a> | <a href='/musicrec'>Music Recommendations</a> | <a href='credits'>Credits </a></span>");
         },menutimer + 100);
         setTimeout(function(){$(".replacelater").fadeIn(5000);},menutimer + 200);




});