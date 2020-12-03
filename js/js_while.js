var m = 2;
while(m < 65536){
    console.log(m);
    m = m * 2;
}
//An ice cream seller can't go home until she sells all of her cones.
// First write enough code that generates a random number between 50 and 100
// representing the amount of cones to sell before you start your loop.
// Inside of the loop your code should generate another random number between 1 and 5,
// simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person.

// This is a way get the random numbers for this exercise.
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
//This is how many cones I start the day with
console.log("I only have this many cones to sell: " + allCones
    );

do{
    // This expression will generate a random number between 1 and 5

    var conesBought = Math.floor(Math.random() * 5) + 1;
    //not enough cones to sell
    if (conesBought >allCones){
        console.log("Sorry, try again tomorrow for "+ conesBought + "I only have : "+ allCones);

    }else{
        // number of cones that are left after purchase
        allCones = allCones - conesBought;
        console.log(conesBought + "is how many you want?No promblem!"+ allCones+ "got left to sale")
    }
}
//condition that runs the loop
while (allCones > 0)
//sold out of cones
console.log("Yay! I sold them all!")