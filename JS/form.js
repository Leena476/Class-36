class Form {

    constructor(){}

    display(){

        var title = createElement("h2");
        title.html("CAR RACING GAME");
        title.position(150,0);

        var input = createInput("NAME");
        input.position(170,150);

        var button = createButton("PLAY");
        button.position(250,230);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            var greeting = createElement("h3");
            greeting.html("HELLO " + name);
            greeting.position(150,200);

            playerCount++;
            player.updateName(name);
            player.updateCount(playerCount);

        })

    }

}