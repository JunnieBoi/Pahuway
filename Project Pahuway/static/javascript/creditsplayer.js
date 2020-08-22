let music = ["Anri - Last Summer Whisper","Sandra Hohn - I Miss You Babe","potsu - bossa uh","saib. - in your arms.","Park Ji Yoon - Precious Love"];
let music_counter = 0;
let trueplayer = [];
let temporaryvar = -1;
for(let counter = 0; counter < music.length; counter++)
{
    trueplayer.push(counter);
}

for(let counter = 0; counter < music.length; counter++)
{
    temporaryvar = trueplayer[counter];
    churnsout = Math.floor((Math.random() * (music.length)));
    while(counter == churnsout)
    {
       churnsout =  Math.floor((Math.random() * (music.length - 1)));
    }
    trueplayer[counter] = trueplayer[churnsout];
    trueplayer[churnsout] = temporaryvar;

}
let recordedmusic = "";
$(document).ready(function(){
    //recordedmusic = "Joakim Karud - Canals";
    recordedmusic = music[trueplayer[music_counter]];
    document.querySelector(".music").src = "static/music/" + recordedmusic + ".mp3";
    document.querySelector(".music").play()
    $(".replaceable").html(recordedmusic);

    $('.music').on('ended', function() {

        music_counter++;
        if(music_counter % music.length == 0 && music_counter != 0)
        {
                music_counter = 0;
                for(let counter = 0; counter < music.length; counter++)
                {
                    temporaryvar = trueplayer[counter];
                    churnsout = Math.floor((Math.random() * (music.length)));
                    while(counter == churnsout)
                    {
                        churnsout =  Math.floor((Math.random() * (music.length - 1)));
                    }
                    trueplayer[counter] = trueplayer[churnsout];
                    trueplayer[churnsout] = temporaryvar;

                }
        }

    $(".replaceable").hide();
    recordedmusic = music[trueplayer[music_counter]];
    document.querySelector(".music").src = "static/music/" + recordedmusic + ".mp3";
    document.querySelector(".music").play()
    $(".replaceable").html(recordedmusic);
    $(".replaceable").fadeIn(5000);


});

});