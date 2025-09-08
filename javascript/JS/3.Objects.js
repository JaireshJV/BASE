// // Objects

// const myObj = {
//    subscriber : 7 ,
//    number : 7 ,
//    content : {
//     earnMoney : "Study",
//     growMoney : "Invest",
//     giveMoney : "To Needy"
//    },
//    subdivision : ["earnMoney","growMoney","giveMoney"],
//    action : function(){
//     return "Hellooo ! World"
//    },
//    action1 : function(){
//     return `Do ${this.content.giveMoney}`
//    }

// }

// console.log(myObj.subscriber);
// console.log(myObj["subscriber"])
// console.log(myObj.content.growMoney);
// console.log(myObj.subdivision[1]);
// console.log(myObj.action());
// console.log(myObj.action1());

// let courses = {
//   frontend : "JS",
//   backend : "Java"
// }

// console.log(courses);

// Object.seal(courses)
// courses["database"] = "MYSQL" ;
// courses["frontend"] = "CSS" ;
// console.log(courses);

// Object.freeze(courses)
// courses["frontend"] = "HTML" ;
// console.log(courses);


// // for in loop

// for(job in movie){
//     console.log(`${job},itz ${movie[job]}`);
// }

// delete movie.producer
// console.log(movie);
// console.log(movie.hasOwnProperty("producer"));      // false

// // Destructuring the object

// const {music : myFavMusicDirector } = movie ;
 
// console.log(myFavMusicDirector);

// const FavMusic = movie.music
// console.log(FavMusic);

const movie ={
    actor : "Suriya",
    director : "K V",
    music : "Harris",
    producer : "Sun Pictures"
}

const {music : MyFavMusic, director : myFavDirector} = movie ;

console.log(MyFavMusic);
console.log(myFavDirector);

const {actor,director,music,producer} = movie ;
console.log(actor);
console.log(director);
console.log(music);
console.log(producer);

function sings({music}) {               // Difference is in curly braces
    return music
}

console.log(sings(movie));