const game = {
    name: "Ghost of Tsushima",
    finalBoss: {
        name: "Krotun Khan",
        health: 1000,
    },
    characters: [
        {name: "Jin Sakai", health: 900}, 
        {name: "Lord Shimura", health: 800},
        {name: "Yuna", health: 1000},
        {name: "Taka", health: 1000},
    ],
    showdown: function () {
        console.log(
            `Welcome to the ${this.name} game! The final boss is ${this.finalBoss.name}`
        );
    },
};
const announceFighting = (gameName, characters, villain) => {
    //This syntax is called  array destructuring
    const [jin, shimura, yuna, taka] = characters;
    //Rest operator is udes to get the rest of the elements
    const [jinSakai, ...otherCharacters] = characters;
    console.log(otherCharacters[0].name);
    console.log(`Welcome to the ${gameName} game! The final boss is ${villain.name}
    He will fight with ${jin.name} and ${shimura.name} and ${yuna.name} and ${taka.name}`);
};
// const name = game.name
// const characters = game.characters
// const finalBoss = game.finalBoss
//This syntax is called object destructuring
const { name, characters, finalBoss } = game;
announceFighting(name, characters, finalBoss);
