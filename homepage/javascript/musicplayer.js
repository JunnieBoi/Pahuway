
let music = ["90's flav - call me","Chinsaku - See ya...","dj quads - it's near",
"driver - the eye of truth","Eddie Rohosy - Night Ride","idealism - dont say a word","Jinsang - affection.",
"Joakim Karud - Dreams","kudasai - a light of mine","kudasai - A night together","kudasai - technicolor",
"Medda - Serenity","mt. fujitive - sunrise","prima - june gloom.","Joakim Karud - Canals","SHIRO - rainy day in tokyo",
"The Deli - 5:32PM"];
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
    document.querySelector(".music").src = "music/" + recordedmusic + ".mp3";
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
    document.querySelector(".music").src = "music/" + recordedmusic + ".mp3";
    document.querySelector(".music").play()
    $(".replaceable").html(recordedmusic);
    $(".replaceable").fadeIn(5000);


});

});