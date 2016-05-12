$( "#launcher" ).click(function() {
      RandomInt(1, 5);
    });

    $( "#about" ).click(function() {
      LaunchAbout();
    });

    $( "#join" ).click(function() {
      LaunchJoin();
    });

    $( "#hydt" ).click(function() {
      LaunchHydt();
    });

    $( "#dev" ).click(function() {
      LaunchDev();
    });

    $( ".closeme" ).click(function() {
      CloseWindow();
    });

    function LaunchAbout(){
        $("#aboutp").toggleClass("hidden");
    }

    function LaunchJoin(){
        $("#joinp").toggleClass("hidden");
    }

    function LaunchHydt(){
        $("#hydtp").toggleClass("hidden");
    }

    function LaunchDev(){
        $("#devp").toggleClass("hidden");
    }

    function CloseWindow(){
        $("#aboutp").addClass("hidden");
        $("#joinp").addClass("hidden");
        $("#hydtp").addClass("hidden");
        $("#devp").addClass("hidden");
    }

    function RandomInt(min, max){
        var ri = Math.floor(Math.random()*(max-min+1)+min);
        ChangeColor(ri);
    }

    function ChangeColor(ci){
        $("#bg").removeClass("state1 state2 state3 state4 state5");

        $("#bg").fadeIn("slow", function() {
            if(ci == 1){
                $(this).addClass("state1");
            }
            else if(ci == 2){
                $(this).addClass("state2");
            }
            else if(ci == 3){
                $(this).addClass("state3");
            }
            else if(ci == 4){
                $(this).addClass("state4");
            }
            else if(ci == 5){
                $(this).addClass("state5");
            }
        });

    }