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
// Exercise 72
// Write a function definition named countEvens that takes in sequence of numbers and returns the number of even numbers
function countEvens(arr) {
    var count = 0;
    for(var i=0;i<arr.length;i++) {
        if(arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
assert(countEvens([1, 2, 3]), 1, "Exercise 72");
assert(countEvens([2, 5, 6]), 2, "Exercise 72");
assert(countEvens([3, 3, 3]), 0, "Exercise 72");
assert(countEvens([5, 6, 7, 8] ), 2, "Exercise 72");
addToDone("Exercise 72 is correct.")


// Exercise 73
// Write a function definition named hasOdds that takes in sequence of numbers and returns true if there are any odd numbers in the sequence
function hasOdds(arr) {
    for(var i=0;i<arr.length;i++) {
        if(arr[i] % 2 !== 0) {
            return true;
        }
    }
    return false;
}
assert(hasOdds([1, 2, 3]), true, "Exercise 73");
assert(hasOdds([2, 5, 6]), true, "Exercise 73");
assert(hasOdds([3, 3, 3]), true, "Exercise 73");
assert(hasOdds([2, 4, 6]), false, "Exercise 73");
addToDone("Exercise 73 is correct."
// Exercise 75
// Write a function definition named countNegatives that takes in sequence of numbers and returns a count of the number of negative numbers
function countNegatives(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}
assert(countNegatives([1, -2, 3]), 1, "Exercise 75");
assert(countNegatives([2, -5, -6]), 2, "Exercise 75");
assert(countNegatives([3, 3, 3]), 0, "Exercise 75");
addToDone("Exercise 75 is correct.");

// Exercise 76
// Write a function definition named countPositives that takes in sequence of numbers and returns a count of the number of positive numbers
function countPositives(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count;
}
assert(countPositives([1, -2, 3]), 2, "Exercise 76");
assert(countPositives([2, -5, -6]), 1, "Exercise 76");
assert(countPositives([3, 3, 3]), 3, "Exercise 76");
assert(countPositives([-2, -1, -5]), 0, "Exercise 76");
addToDone("Exercise 76 is correct.");

// Exercise 77
// Write a function definition named onlyPositiveEvens that takes in sequence of numbers and returns an array containing all the positive evens from the sequence
function onlyPositiveEvens(arr) {
    var final = [];
    for (var i = 0; i < arr.length; i++) {
        if (isPositive(arr[i]) && isEven(arr[i])) {
            final.push(arr[i]);
        }
    }
    return final;
}
assert(onlyPositiveEvens([1, -2, 3]), [], "Exercise 77");
assert(onlyPositiveEvens([2, -5, -6]), [2], "Exercise 77");
assert(onlyPositiveEvens([3, 3, 4, 6]), [4, 6], "Exercise 77");
assert(onlyPositiveEvens([2, 3, 4, -1, -5]), [2, 4], "Exercise 77");
addToDone("Exercise 77 is correct.");

// Exercise 78
// Write a function definition named onlyPositiveOdds that takes in sequence of numbers and returns an array containing all the positive odd numbers from the sequence
function onlyPositiveOdds(arr) {
    var final = [];
    for (var i = 0; i < arr.length; i++) {
        if (isPositive(arr[i]) && isOdd(arr[i])) {
            final.push(arr[i]);
        }
    }
    return final;
}
assert(onlyPositiveOdds([1, -2, 3]), [1, 3], "Exercise 78");
assert(onlyPositiveOdds([2, -5, -6]), [], "Exercise 78");
assert(onlyPositiveOdds([3, 3, 4, 6]), [3, 3], "Exercise 78");
assert(onlyPositiveOdds([2, 3, 4, -1, -5]), [3], "Exercise 78");
addToDone("Exercise 78 is correct.");

// Exercise 79
// Write a function definition named onlyNegativeEvens that takes in sequence of numbers and returns an array containing all the negative even numbers from the sequence
function onlyNegativeEvens(arr) {
    var final = [];
    for (var i = 0; i < arr.length; i++) {
        if (isNegative(arr[i]) && isEven(arr[i])) {
            final.push(arr[i]);
        }
    }
    return final;
}
assert(onlyNegativeEvens([1, -2, 3]), [-2], "Exercise 79");
assert(onlyNegativeEvens([2, -5, -6]), [-6], "Exercise 79");
assert(onlyNegativeEvens([3, 3, 4, 6]), [], "Exercise 79");
assert(onlyNegativeEvens([-2, 3, 4, -1, -4]), [-2, -4], "Exercise 79");
addToDone("Exercise 79 is correct.");

// Exercise 80
// Write a function definition named onlyNegativeOdds that takes in sequence of numbers and returns an array containing all the negative odd numbers from the sequence
function onlyNegativeOdds(arr) {
    var final = [];
    for (var i = 0; i < arr.length; i++) {
        if (isNegative(arr[i]) && isOdd(arr[i])) {
            final.push(arr[i]);
        }
    }
    return final;
}
assert(onlyNegativeOdds([1, -2, 3]), [], "Exercise 80");
assert(onlyNegativeOdds([2, -5, -6]), [-5], "Exercise 80");
assert(onlyNegativeOdds([3, 3, 4, 6]), [], "Exercise 80");
assert(onlyNegativeOdds([2, -3, 4, -1, -4]), [-3, -1], "Exercise 80");
addToDone("Exercise 80 is correct.");

// Exercise 81
// Write a function definition named shortestString that takes in an array of strings and returns the shortest string in the array.
function shortestString(strings) {
    var shortest = "superlongdefaultthisisnotthebestwaytodothisbyfar";
    for (var i = 0; i < strings.length; i++) {
        if (strings[i].length < shortest.length) {
            shortest = strings[i];
        }
    }
    return shortest;
}
assert(shortestString(["kiwi", "mango", "strawberry"]), "kiwi", "Exercise 81");
assert(shortestString(["hello", "everybody"]), "hello", "Exercise 81");
assert(
    shortestString(["mary", "had", "a", "little", "lamb"]),
    "a",
    "Exercise 81"
);
addToDone("Exercise 81 is correct.");

// Exercise 82
// Write a function definition named longestString that takes in sequence of strings and returns the longest string in the array.
function longestString(strings) {
    var longest = "";
    for (var i = 0; i < strings.length; i++) {
        if (strings[i].length > longest.length) {
            longest = strings[i];
        }
    }
    return longest;
}
assert(
    longestString(["kiwi", "mango", "strawberry"]),
    "strawberry",
    "Exercise 82"
);
assert(longestString(["hello", "everybody"]), "everybody", "Exercise 82");
assert(
    longestString(["mary", "had", "a", "little", "lamb"]),
    "little",
    "Exercise 82"
);
addToDone("Exercise 82 is correct.");

// Exercise 83
// Write a function definition named getUniqueValues that takes in an array and returns an with only the unique values from that array.
function getUniqueValues(strings) {
    var final = [];
    for (var i = 0; i < strings.length; i++) {
        if (final.includes(strings[i])) {
            continue;
        }
        final.push(strings[i]);
    }
    return final;
}
assert(
    getUniqueValues(["ant", "ant", "mosquito", "mosquito", "ladybug"]),
    ["ant", "mosquito", "ladybug"],
    "Exercise 83"
);
assert(
    getUniqueValues(["b", "a", "n", "a", "n", "a", "s"]),
    ["b", "a", "n", "s"],
    "Exercise 83"
);
assert(
    getUniqueValues([
        "mary",
        "had",
        "a",
        "little",
        "lamb",
        "little",
        "lamb",
        "little",
        "lamb"
    ]),
    ["mary", "had", "a", "little", "lamb"],
    "Exercise 83"
);
addToDone("Exercise 83 is correct.");

// Exercise 84
// Write a function definition named elementsTimesTwo that takes in an array of numbers and returns an array with each value multiplied by 2.
function elementsTimesTwo(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
    return arr;
}

assert(elementsTimesTwo([1, 2, 3]), [2, 4, 6], "Exercise 84");
assert(elementsTimesTwo([0, 0, 0]), [0, 0, 0], "Exercise 84");
assert(elementsTimesTwo([5, 10, 15]), [10, 20, 30], "Exercise 84");
addToDone("Exercise 84 is correct.");

// Exercise 85
// Write a function named flatten that takes in an array of arrays. Return the flattened array.
function flatten(arrays) {
    return [].concat.apply([], arrays);
}

assert(flatten([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6], "Exercise 85");
assert(
    flatten([[1, 2, 3], [1, 2, 3], [1, 2, 3]]),
    [1, 2, 3, 1, 2, 3, 1, 2, 3],
    "Exercise 85"
);
assert(
    flatten([["tomato", "mango", "kiwi"], ["eggplant", "broccoli"]]),
    ["tomato", "mango", "kiwi", "eggplant", "broccoli"],
    "Exercise 85"
);
addToDone("Exercise 85 is correct.");

// Exercise 86
// Write a function definition named addOneToArray that adds one to every number in an array
function addOneToArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i]++;
    }
    return arr;
}
assert(addOneToArray([1, 2, 3]), [2, 3, 4], "Exercise 86");
assert(addOneToArray([4, 4, 4]), [5, 5, 5], "Exercise 86");
assert(addOneToArray([9, 10, 11]), [10, 11, 12], "Exercise 86");
addToDone("Exercise 86 is correct.");

// Working with JS Objects

// The following objects
const tukeyPaper = {
    title: "The Future of Data Analysis",
    author: "John W. Tukey",
    link: "https://projecteuclid.org/euclid.aoms/1177704711",
    year_published: 1962
};

const thomasPaper = {
    title: "A mathematical model of glutathione metabolism",
    author: "Rachel Thomas",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/18442411",
    year_published: 2008
};

// Exercise 87
// Write a function named getPaperTitle that takes in a object and returns the title property
function getPaperTitle(obj) {
    return obj.title;
}
assert(getPaperTitle(tukeyPaper), "The Future of Data Analysis", "Exercise 87");
assert(
    getPaperTitle(thomasPaper),
    "A mathematical model of glutathione metabolism",
    "Exercise 87"
);
addToDone("Exercise 87 is correct.");

// Exercise 88
// Write a function named getYearPublished that takes in an objects and returns the value behind the "year_published" key.
function getYearPublished(obj) {
    return obj.year_published;
}
assert(getYearPublished(tukeyPaper), 1962, "Exercise 88");
assert(getYearPublished(thomasPaper), 2008, "Exercise 88");
addToDone("Exercise 88 is correct.");

// this code defines a JS object with information about a book.
const book = {
    title: "Genetic Algorithms and Machine Learning for Programmers",
    price: 36.99,
    author: "Frances Buontempo"
};

// Exercise 89
// Write a function named getPrice that takes in a object and returns the price
function getPrice(obj) {
    return obj.price;
}
assert(getPrice(book), 36.99, "Exercise 89");
addToDone("Exercise 89 is complete.");

// Exercise 90
// Write a function named getBookAuthor that takes in a object (the above declared book variable) and returns the author's name
function getBookAuthor(obj) {
    return obj.author;
}

assert(getBookAuthor(book), "Frances Buontempo", "Exercise 90");
addToDone("Exercise 90 is complete.");

// The next exercises work with a arrays of objects.
// You'll see arrays of objects over and over again with data in a program.
// Here is our arrays of objects.
const books = [
    {
        title: "Genetic Algorithms and Machine Learning for Programmers",
        price: 36.99,
        author: "Frances Buontempo"
    },
    {
        title: "The Visual Display of Quantitative Information",
        price: 38.0,
        author: "Edward Tufte"
    },
    {
        title: "Practical Object-Oriented Design",
        author: "Sandi Metz",
        price: 30.47
    },
    {
        title: "Weapons of Math Destruction",
        author: "Cathy O'Neil",
        price: 17.44
    }
];

// Exercise 91
// Write a function named getNumberOfBooks that takes in a array of objects and returns the number of objects in that array.
function getNumberOfBooks(arr) {
    return arr.length;
}
assert(getNumberOfBooks(books), 4, "Exercise 91");
addToDone("Exercise 91 is complete.");

// Exercise 92
// Write a function named totalOfBookPrices that takes in a array of objects and returns the sum total of all the book prices added together
function totalOfBookPrices(arr) {
    var totalPrice = 0;
    for (var i = 0; i < arr.length; i++) {
        totalPrice += arr[i].price;
    }
    return totalPrice;
}
assert(totalOfBookPrices(books), 122.9, "Exercise 92");
addToDone("Exercise 92 is complete.");

// Exercise 93
// Write a function named getAverageBookPrice that takes in a array of objects and returns the average book price.
function getAverageBookPrice(arr) {
    var totalPrice = 0;
    for (var i = 0; i < arr.length; i++) {
        totalPrice += arr[i].price;
    }
    return totalPrice / arr.length;
}
assert(getAverageBookPrice(books), 30.725, "Exercise 93");
addToDone("Exercise 93 is complete.");

// Exercise 94
// Write a function called highestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the highest priced book.
// Hint: Much like sometimes start functions with a variable set to zero, you may want to create a object with the price set to zero to compare to each object's price in the array
function highestPriceBook(arr) {
    var highestPriceBook = {
        title: "Dirt Cheap Placeholder",
        author: "John W. Chicken",
        price: "00.00"
    };
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].price > highestPriceBook.price) {
            highestPriceBook = arr[i];
        }
    }
    return highestPriceBook;
}
assert(
    highestPriceBook(books),
    {
        title: "The Visual Display of Quantitative Information",
        price: 38.0,
        author: "Edward Tufte"
    },
    "Exercise 94"
);

addToDone("Exercise 94 is complete");

// Exercise 95
// Write a function called lowestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the lowest priced book.
// Hint: Much like sometimes start functions with a variable set to zero or float('inf'), you may want to create a object with the price set to float('inf') to compare to each object in the array
function lowestPriceBook(arr) {
    var lowestPriceBook = {
        title: "Dirt Cheap Placeholder",
        author: "John W. Chicken",
        price: 5000.0
    };
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].price < lowestPriceBook.price) {
            lowestPriceBook = arr[i];
        }
    }
    return lowestPriceBook;
}

assert(
    lowestPriceBook(books),
    {
        title: "Weapons of Math Destruction",
        author: "Cathy O'Neil",
        price: 17.44
    },
    "Exercise 95"
);
addToDone("Exercise 95 is complete.");

const shoppingCart = {
    tax: 0.08,
    items: [
        {
            title: "orange juice",
            price: 3.99,
            quantity: 1
        },
        {
            title: "rice",
            price: 1.99,
            quantity: 3
        },
        {
            title: "beans",
            price: 0.99,
            quantity: 3
        },
        {
            title: "chili sauce",
            price: 2.99,
            quantity: 1
        },
        {
            title: "chocolate",
            price: 0.75,
            quantity: 9
        }
    ]
};

// Exercise 96
// Write a function named getTaxRate that takes in the above shopping cart as input and returns the tax rate.
// Hint: How do you access a key's value on a object? The tax rate is one key of the entire shoppingCart object.
function getTaxRate(arr) {
    return arr.tax;
}
assert(getTaxRate(shoppingCart), 0.08, "Exercise 96");
addToDone("Exercise 96 is complete");

// Exercise 97
// Write a function named numberOfItemTypes that takes in the shopping cart as input and returns the number of unique item types in the shopping cart.
// We're not yet using the quantity of each item, but rather focusing on determining how many different types of items are in the cart.
function numberOfItemTypes(obj) {
    var uniqueItems = [];
    for (var i = 0; i < obj.items.length; i++) {
        if (uniqueItems.includes(obj.items[i].title)) {
            continue;
        }
        uniqueItems.push(obj.items[i].title);
    }
    return uniqueItems.length;
}
assert(numberOfItemTypes(shoppingCart), 5, "Exercise 97");
addToDone("Exercise 97 is complete.");