var m = 2;
while(m < 65536){
    console.log(m);
    m = m * 2;
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
//This is how many cones I start the day with
console.log("I only have this many cones to sell: " + allCones
    );
// This expression will generate a random number between 1 and 5


do{
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if (conesBought >allCones){
        //not enough cones to sell
        console.log("Sorry, try again tomorrow for "+ conesBought + "I only have : "+ allCones);

    }else{
        // number of cones that are left after purchase
        allCones = allCones - conesBought;
        console.log(conesBought + "is how many you want?No promblem!"+ allCones+ "got left to sale")
    }
}
//condition that runs the loop
while (allCones > 0)
//ran out of cones
console.log("Yay! I sold them all!")