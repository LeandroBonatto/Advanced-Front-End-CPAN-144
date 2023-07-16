const game ={

    name: "Call of Duty",

    finalBoss: {name:"Peter", health: 1000, characters:["john","Tyson","tommy"]},

    print: function() {

    console.log(`Welcome to the ${game.name} game! The final boss is ${game.finalBoss.name}, 
    His health is ${game.finalBoss.health}.`)

    }

}

game.print();