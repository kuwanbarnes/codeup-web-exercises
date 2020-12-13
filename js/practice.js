// Exercise 51
// Write a function definition named second that takes in sequence and returns the second value of that sequence.
function second(input){
    return input[1];
}
assert(second("ubuntu"), "b", "Exercise 51");
assert(second([1, 2, 3]), 2, "Exercise 51");
assert(second(["JS", "is", "awesome"]), "is", "Exercise 51");
addToDone("Exercise 51 is correct.");

// Exercise 52
// Write a function definition named third that takes in sequence and returns the third value of that sequence.
function third(input){
    return input[2]
}
assert(third("ubuntu"), "u", "Exercise 52");
assert(third([1, 2, 3]), 3, "Exercise 52");
assert(third(["JS", "is", "awesome"]), "awesome", "Exercise 52");
addToDone("Exercise 52 is correct.");

// Exercise 53
// Write a function definition named forth that takes in sequence and returns the forth value of that sequence.
function forth(input){
    return input[3]
}
assert(forth("ubuntu"), "n", "Exercise 53");
assert(forth([1, 2, 3, 4]), 4, "Exercise 53");
assert(forth(["JS", "is", "awesome", "right?"]), "right?", "Exercise 53");
addToDone("Exercise 53 is correct.");

// Exercise 54
// Write a function definition named last that takes in sequence and returns the last value of that sequence.
function last(input){
    var str = input;
    var lastLetter = str[str.length - 1];
    return lastLetter
}
assert(last("ubuntu"), "u", "Exercise 54");
assert(last([1, 2, 3, 4]), 4, "Exercise 54");
assert(last(["JS", "is", "awesome"]), "awesome", "Exercise 54");
assert(last(["kiwi", "mango", "guava"]), "guava", "Exercise 54");
addToDone("Exercise 54 is correct.");

// Exercise 55
// Write a function definition named secondToLast that takes in sequence and returns the second to last value of that sequence.
function secondToLast(input){
    var str = input;
    var lastLetter = str[str.length - 2];
    return lastLetter
}
assert(secondToLast("ubuntu"), "t", "Exercise 55");
assert(secondToLast([1, 2, 3, 4]), 3, "Exercise 55");
assert(secondToLast(["JS", "is", "awesome"]), "is", "Exercise 55");
assert(secondToLast(["kiwi", "mango", "guava"]), "mango", "Exercise 55");
addToDone("Exercise 55 is correct.");

// Exercise 56
// Write a function definition named thirdToLast that takes in sequence and returns the third to last value of that sequence.
function thirdToLast(input){
    var str = input;
    var lastLetter = str[str.length - 3];
    return lastLetter
}
assert(thirdToLast("ubuntu"), "n", "Exercise 56");
assert(thirdToLast([1, 2, 3, 4]), 2, "Exercise 56");
assert(thirdToLast(["JS", "is", "awesome"]), "JS", "Exercise 56");
assert(
    thirdToLast(["strawberry", "kiwi", "mango", "guava"]),
    "kiwi",
    "Exercise 56"
);
addToDone("Exercise 56 is correct.");

// Exercise 57
// Write a function definition named firstAndSecond that takes in sequence and returns the first and second value of that sequence as an array
function firstAndSecond(input) {

    var firstItem = input[0];
    var lastItem = input[1];

    var objOutput = [firstItem, lastItem];


    return objOutput;
}
assert(firstAndSecond([1, 2, 3, 4]), [1, 2], "Exercise 57");
assert(firstAndSecond(["JS", "is", "awesome"]), ["JS", "is"], "Exercise 57");
assert(
    firstAndSecond(["strawberry", "kiwi", "mango", "guava"]),
    ["strawberry", "kiwi"],
    "Exercise 57"
);
addToDone("Exercise 57 is correct.");

// Exercise 58
// Write a function definition named firstAndLast that takes in sequence and returns the first and last value of that sequence as an array
function firstAndLast(input) {

    var firstItem = input[0];
    var lastItem = input[input.length-1];

    var objOutput = [firstItem, lastItem];


    return objOutput;
}
assert(firstAndLast([1, 2, 3, 4]), [1, 4], "Exercise 58");
assert(firstAndLast(["JS", "is", "awesome"]), ["JS", "awesome"], "Exercise 58");
assert(
    firstAndLast(["strawberry", "kiwi", "mango", "guava"]),
    ["strawberry", "guava"],
    "Exercise 58"
);
addToDone("Exercise 58 is correct.");

// Exercise 59
// Write a function definition named firstToLast that takes in sequence and returns the sequence with the first value moved to the end of the sequence.
function firstToLast(sequence) {
    var b = sequence.shift();
    sequence[sequence.length] = b;
    return sequence;
}
// function firstToLast(input){
//   var array =input.push(input.shift(input)
// }
assert(firstToLast([1, 2, 3, 4]), [2, 3, 4, 1], "Exercise 59");
assert(
    firstToLast(["JS", "is", "awesome"]),
    ["is", "awesome", "JS"],
    "Exercise 59"
);
assert(
    firstToLast(["strawberry", "kiwi", "mango", "guava"]),
    ["kiwi", "mango", "guava", "strawberry"],
    "Exercise 59"
);
addToDone("Exercise 59 is correct.");

// Exercise 60
// Write a function definition named sumAll that takes in sequence of numbers and returns all the numbers added together.
function sumAll(sequence) {
    var sum = 0;
    for(var i=0;i<sequence.length;i++) {
        sum += sequence[i];
    }
    return sum;
}
assert(sumAll([1, 2, 3, 4]), 10, "Exercise 60");
assert(sumAll([3, 3, 3]), 9, "Exercise 60");
assert(sumAll([0, 5, 6]), 11, "Exercise 60");
addToDone("Exercise 60 is correct.");

//  Exercise 61
//  Write a function definition named mean that takes in sequence of numbers and returns the average value
function mean(sequence) {
    var sum = 0;
    for(var i=0;i<sequence.length;i++) {
        sum += sequence[i];
    }
    return sum / sequence.length;
}
assert(mean([1, 2, 3, 4]), 2.5, "Exercise 61");
assert(mean([3, 3, 3]), 3, "Exercise 61");
assert(mean([1, 5, 6]), 4, "Exercise 61");
addToDone("Exercise 61 is correct.");

// Exercise 62
// Write a function definition named median that takes in sequence of numbers and returns the average value
function median(arr) {
    const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}
assert(median([1, 2, 3, 4, 5]), 3.0, "Exercise 62");
assert(median([1, 2, 3]), 2.0, "Exercise 62");
assert(median([1, 5, 6]), 5.0, "Exercise 62");
assert(median([1, 2, 5, 6]), 3.5, "Exercise 62");
addToDone("Exercise 62 is correct.");

// Exercise 63
// Write a function definition named maxMinusMin that takes in an array of numbers and returns the difference of the maximum minus theminimum.
function maxMinusMin(arr) {
    arr.sort();
    return arr[arr.length - 1] - arr[0];
}
assert(maxMinusMin([1, 2, 2, 8, 3, 4]), 7, "Exercise 63");
assert(maxMinusMin([1, 1, 2, 3, 9]), 8, "Exercise 63");
assert(maxMinusMin([2, 2, 3, 3, 3, 7]), 5, "Exercise 63");
addToDone("Exercise 63 is correct.");

// Exercise 64
// Write a function definition named productOfAll that takes in sequence of numbers and returns the product of multiplying all the numbers together
function productOfAll(arr) {
    var final = 1;
    for(var i=0;i<arr.length;i++) {
        final *= arr[i];
    }
    return final;
}
assert(productOfAll([1, 2, 3]), 6, "Exercise 64");
assert(productOfAll([3, 4, 5]), 60, "Exercise 64");
assert(productOfAll([2, 2, 3, 0]), 0, "Exercise 64");
addToDone("Exercise 64 is correct.")

// Exercise 65
// Write a function definition named getHighestNumber that takes in sequence of numbers and returns the largest number.
function getHighestNumber(arr) {
    arr.sort();
    return arr[arr.length - 1];
}

assert(getHighestNumber([1, 2, 3]), 3, "Exercise 65");
assert(getHighestNumber([1, 5, 2, 3, 4]), 5, "Exercise 65");
assert(getHighestNumber([5, 1, 2, 4, 9]), 9, "Exercise 65");
addToDone("Exercise 65 is correct.")




// Exercise 66
// Write a function definition named getSmallestNumber that takes in sequence of numbers and returns the smallest number.
function getSmallestNumber(arr) {
    arr.sort();
    return arr[0];
}

assert(getSmallestNumber([1, 2, 3]), 1, "Exercise 66");
assert(getSmallestNumber([3, 5, 9, 8, 1]), 1, "Exercise 66");
assert(getSmallestNumber([8, 9, 4, 5, 7]), 4, "Exercise 66");
addToDone("Exercise 66 is correct.")


// Exercise 67
// Write a function definition named onlyOddNumbers that takes in sequence of numbers and returns the odd numbers in an array.
function onlyOddNumbers(arr) {
    var final = [];
    for(var i=0;i<arr.length;i++) {
        if(isOdd(arr[i])) {
            final.push(arr[i]);
        }
    }
    return final;
}
assert(onlyOddNumbers([1, 2, 3]), [1, 3], "Exercise 67");
assert(onlyOddNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-5, -3, -1, 1, 3, 5], "Exercise 67");
assert(onlyOddNumbers([-4, -3, 1]), [-3, 1], "Exercise 67");
addToDone("Exercise 67 is correct.")



// Exercise 68
// Write a function definition named onlyEvenNumbers that takes in sequence of numbers and returns the even numbers in an array.
function onlyEvenNumbers(arr) {
    var final = [];
    for(var i=0;i<arr.length;i++) {
        if(isEven(arr[i])) {
            final.push(arr[i]);
        }
    }
    return final;
}
assert(onlyEvenNumbers([1, 2, 3]), [2], "Exercise 68");
assert(onlyEvenNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-4, -2, 2, 4], "Exercise 68");
assert(onlyEvenNumbers([-4, -3, 1]), [-4], "Exercise 68");
addToDone("Exercise 68 is correct.")


// Exercise 69
// Write a function definition named onlyPositiveNumbers that takes in sequence of numbers and returns the positive numbers in an array.
function onlyPositiveNumbers(arr) {
    var final = [];
    for(var i=0;i<arr.length;i++) {
        if(arr[i] > 0) {
            final.push(arr[i]);
        }
    }
    return final;
}
assert(onlyPositiveNumbers([1, 2, 3]), [1, 2, 3], "Exercise 69");
assert(onlyPositiveNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5], "Exercise 69");
assert(onlyPositiveNumbers([-4, -3, 1]), [1], "Exercise 69");
addToDone("Exercise 69 is correct.")


// Exercise 70
// Write a function definition named onlyNegativeNumbers that takes in sequence of numbers and returns the negative numbers in an array.
function onlyNegativeNumbers(arr) {
    var final = [];
    for(var i=0;i<arr.length;i++) {
        if(arr[i] < 0) {
            final.push(arr[i]);
        }
    }
    return final;
}
assert(onlyNegativeNumbers([1, 2, 3]), [], "Exercise 70");
assert(onlyNegativeNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-5, -4, -3, -2, -1], "Exercise 70");
assert(onlyNegativeNumbers([-4, -3, 1]), [-4, -3], "Exercise 70");
addToDone("Exercise 70 is correct.");



// Exercise 71
// Write a function definition named hasEvens that takes in sequence of numbers and returns true if there are any even numbers in the sequence
function hasEvens(arr) {
    for(var i=0;i<arr.length;i++) {
        if(arr[i] % 2 === 0) {
            return true;
        }
    }
    return false;
}