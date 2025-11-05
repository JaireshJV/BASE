// Objects

const myObj = {
   subscriber : 7 ,
   number : 7 ,
   content : {
    earnMoney : "Study",
    growMoney : "Invest",
    giveMoney : "To Needy"
   },
   subdivision : ["earnMoney","growMoney","giveMoney"],
   action : function(){
    return "Hellooo ! World"
   },
   action1 : function(){
    return `Do ${this.content.giveMoney}`
   }

}

console.log(myObj.subscriber);
console.log(myObj["subscriber"])
console.log(myObj.content.growMoney);
console.log(myObj.subdivision[1]);
console.log(myObj.action());
console.log(myObj.action1());

let courses = {
  frontend : "JS",
  backend : "Java"
}

console.log(courses);

// Seal 
//    Only we can update the existing value , cant create the new one 
Object.seal(courses)
courses["database"] = "MYSQL" ;
courses["frontend"] = "CSS" ;
console.log(courses,'afterseal');

// Freeze
//  Cannot update or create the value .
Object.freeze(courses)
courses["frontend"] = "HTML" ;
console.log(courses,'afterfreeze');

// for in loop

const movie ={
    actor : "Suriya",
    director : "K V",
    music : "Harris",
    producer : "Sun Pictures"
}

for(job in movie){
    console.log(`${job},itz ${movie[job]}`);
}

delete movie.producer
console.log(movie);
console.log(movie.hasOwnProperty("producer"));      // false

// Destructuring the object

const {music : myFavMusicDirector } = movie ;

console.log(myFavMusicDirector);

const FavMusic = movie.music
console.log(FavMusic);

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

// Convert an array to object :

const fields = ["username", "userage", "useremail"];

// Using Object method

// const formOutput = Object.fromEntries(
//   fields.map((id) => [id, document.getElementById(id).value])    // refer form.html as it only works on Dom .
// );

console.log(fields,'fields');
// console.log(formOutput, "formOutput");               // fromEntries ==> is used to change values from Array to Object 

// const Output = Object.entries(formOutput);           // entries ==> is used to change values from Object to Array 
// console.log(Output, "Output");

// const out = Output.map((id) => id);
// console.log(out, "out");


let a = {name :"Jai" , age :"29" } ;
Object.freeze(a) ;
let obj = a ;
obj.name = "Arun" ;

console.log(a) ;
console.log(obj) ;


