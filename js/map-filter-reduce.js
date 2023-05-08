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

// So create a new variable , and a function , give it a parameter, follow by return it


const threeLanguages = users.filter(function (x){
    return   x.languages.length  >= 3
});
console.log(threeLanguages); //  get the three languages , first part is a parameter , then the languages inside the user , then the length because of an array.

/*const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]*/


const Emails = users.map(function (x){
    return   x.email

});
console.log(Emails)


const yearsOnDaJob = users.reduce(function (total,person){
    return total + person.yearsOfExperience
},0)
console.log(yearsOnDaJob)

let averageExp = yearsOnDaJob/users.length

let longestEmail = users.reduce(function(longEmail, person){
    if (person.email.length > longEmail.length){
        longEmail = person.email;
    }
    console.log(longEmail)
    return longEmail
},"")
console(longestEmail);


let namestring = users.reduce(function(nstring,person){
        if (nstring === ""){
            nstring = "Your instructor are " person.name
        }
},"")
