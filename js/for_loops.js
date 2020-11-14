function showMultiplicationTable(input){
    //for(x=1;;)for(y=1;y<11;y++)console.log((y==1?'\n':'')+x+'*'+y+'='+x*y);
    var j =0
while (j < 10){
j++;
    console.log((j==0?'\n':'')+input+'*'+j+'='+input*j);
}


}

// var start = 20;


// function getRandomNumber(start,range) {
//     while (randomNumber < range) {
//         randomNumber = Math.floor((Math.random() * range) + start);
//     }
//     return getRandomNumber()
// }
for (var i=0; i<10;i++){
    var randomNumber =Math.floor((Math.random()* 180) +20);
    if (randomNumber % 2 !== 0) {
        console.log(randomNumber + "is odd");
    }else{ (randomNumber % 2 === 0)
        {
            console.log(randomNumber + "is even")
            // number isn't even
            // odd numbers aren't as cool
            // skip the rest of the loop and continue with the next iteration
        } }}
// f
for (i = 1; i < 10; i++) {
    var res = [];
    for (a = 1; a <= i; a++) {
        res.push(i);
    }
    console.log(res.join(""));
}



for (var i=100; i>4; i--) {
    if (i%5==0) {
        console.log(i)
    }

}
// function drawTriangle(t){
//
//     for (let i=1; i <= t; i++)
//     {
//         let eachLine = ''
//
//         for (let j=1; j<=i; j++)
//         {
//             eachLine += j + " "
//         }
//         eachLine = eachLine.trim();
//         console.log(eachLine);
//     }
//
// }
//
// let t = 10 ;
// drawTriangle(t);
//returns 1,12,123,1234,12345
