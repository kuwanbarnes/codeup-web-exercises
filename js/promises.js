"use strict";
const url ='https://api.github.com/users/'
const events = '/events'


const getLastCommit=(username)=> {

    //want to get the /users/${username}/events/public
    //get lastest repo ID with activity on
    //fetch to get the /repos/id
    return fetch(url + username + events, {headers: {'Authorization': 'token 56c8a9947c9709aae7203f427bcf1d4d5d963bc0'}})
}
let lastCommintPromise = getLastCommit("kuwanbarnes")
        .then(response=>{
            response.json().then(data=>{
                console.log(data)
                let repoUrl = data[0].repo.url
                return fetch(repo.url, {headers: {'Authorization': 'token 56c8a9947c9709aae7203f427bcf1d4d5d963bc0'}})
                    .then(response=>{
                        response.json()
                        console.log(repoUrl)
                    })

            })


            // return fetch("https://api.github.com/users/${username}/repos/${id}")
            // response.json()


        })
    // data.then((res)=>{
    // if(res.status ==200){
    //     res.json().then(data =>{
    //         let firstDate =Date.parse(data[0].updated_at)
    //         let lastRepoUdate = data.reduce((last,current,index)=>{
    //             if(index == data.length-1)return last.name
    //             return Date.parse(last.update_at) > Date.parse(current.update_at)
    //         },data[0])
    //     })
    // }
    // console.log(data);
    // .then(users=>{
    //     console.log(users.length)
    //     users.forEach(userObj=>{
    //         console.log(userObj.username);
    //     })
    // })
}
getLastCommit('kuwanbarnes')

