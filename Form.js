class Form{
    constructor(){
        
        this.button = createButton("PLAY");
        this.input = createInput('Name');
        this.greeting = createElement('h3');
    }
    hide(){
        this.button.hide();
        this.greeting.hide();
        this.input.hide();
    }





    display(){
        var title = createElement('h2') //h1,h2,h3,--h6
        title.html("CAR RACING GAME");
        title.position(130,0);

       
        this.input.position(130,160);

       
        this.button.position(250,200);

        this.button.mousePressed(()=>{     //anonymous means no function name
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;

            player.update();
            player.updateCount(playerCount);
             
           
            this.greeting.html("Hello"+ name) ;
            this.greeting.position(130,160)
            

        })
    }
}