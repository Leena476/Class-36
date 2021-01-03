class Player {

    constructor () {



    }

    updateName(name){
        
        var playerIndex = "Player"+playerCount;

        database.ref(playerIndex).set({
            name:name
        })

    }

    updateCount(count){

        database.ref("/").update({
            playerCount:count
        })
        
    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", function (data){
            playerCount = data.val();
        })

    }

}