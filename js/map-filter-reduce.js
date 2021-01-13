"use strict";

$(document).ready(function() {
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    let threeLang = users.filter(function (user){

        return (user.languages.length >= 3);
    });
    console.log(threeLang);

    let emailAd = users.map(function(user){
        return ( user.email);
    });
    console.log(emailAd)

    let totalYearsReduce = users.reduce(function (total,user){
        return (total += parseFloat(user.yearsOfExperience));// 0 + 3199-first iteration
    }, 0)/users.length;
    console.log("total years reduce: " + totalYearsReduce);

    let longestEmail = users.reduce(function (total, user){
        return total.email.length > user.email.length ? total.email : user;

    });
    console.log(longestEmail);



    var userNames = users.reduce((total,user,i)=>{
        if(i === user.length-1)
            return  total += user.name + "."
            return total += user.name + ","
    },"");
    console.log("All users: "+ userNames);

})