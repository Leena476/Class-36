class Game {

    constructor () {



    }

    getState () {

        var stateRef = database.ref("gameState");
        stateRef.on("value", function(data){

            gameState = data.val();

        })

    }

    updateState (state) {

        database.ref("/").update({
            gameState:state
        })
        
    }

    start(){
        if(gameState === 0){
            form = new Form();
            form.display();
            player = new Player();
            player.getCount();
        }

    }

    play(){

    }



}