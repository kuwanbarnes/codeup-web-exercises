while(isNaN(userNum) ||(userNum % 2 ==0) ||(userNum < 1)||(userNum > 50)){
    var userNum = prompt("Please enter number between 1 - 50!")
}

console.log("Number to skip is: " + userNum);

for (var i = 1; i< 50; i++){
    if (i == userNum) {
        console.log("Yikes! Skipping number: " + i);
        continue;
    }else if (i % 2 ===0){
        continue;
    }else{
        console.log("Here is an odd number: " + i);
    }
}







//     var oddnum=prompt("enter odd number 1-50")
//
//
// while(num<50){
//     num++;
//     if(num % 2 !==0){
//         continue;
//         console.log("Here is your odd number: "+ num)
//     }
//
//
// }

    // for (var oddnum= 1;oddnum<50;oddnum++){
    //     if (oddnum % 2 !== 0) {
    //         console.log("Here is your odd number:" + oddnum );
    //         {
    //             continue
    //
    //         }

//}}