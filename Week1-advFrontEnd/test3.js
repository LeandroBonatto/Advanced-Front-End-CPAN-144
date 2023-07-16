const game = {
    name: "Ghost of Tsushima",
    finalBoss: {
        name: "Krotun Khan",
        health: 1000,
    },
    characters: [{name: 'Jin Sakai', health: 900}, {name: ' Shimura', health: 800}],
    showdown: function () {
        console.log(`Welcome to the ${this.name} game! The final boss is ${this.finalBoss.name}`);
    }
};
game.showdown();