let imagepicker = ["champloo.gif","chibidance.gif","cute.gif","feetonwater.gif","futuristic.gif",
            "garden.gif","gun.gif","kawaii.gif","lostatsea.gif","lupin.webm","naruto.gif","naruto.webm",
            "neon.webm","paradise.gif","phone.gif","pout.gif","sleepy.gif","train.gif","vendingmachine.gif"];

$(document).ready(function(){
    setTimeout(function()
    {



        $(".target").hide();
        document.querySelector(".target").src = "static/images/chillbox/" + imagepicker[Math.floor((Math.random() * (imagepicker.length)))];
        $(".target").hide();
        window.scrollTo({ top:100,behavior: 'smooth'});
        $(".target").on("load",function(){$(".target").fadeIn(5000);});


        $(".target").on("error",function(){
            $(".target").hide();
            document.querySelector(".target").src = "static/images/chillbox/" + imagepicker[Math.floor(((Math.random() * Math.random()) * (imagepicker.length)) % imagepicker.length)];
            $(".target").hide();

        },);

        setInterval(function()
        {
            $(".target").hide();
            document.querySelector(".target").src = "static/images/chillbox/" + imagepicker[Math.floor((Math.random() * (imagepicker.length)))];
            $(".target").hide();
        },25000);

    },32000);
});