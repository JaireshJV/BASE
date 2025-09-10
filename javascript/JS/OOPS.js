// // Inheritance

// const vehicle = {
//   doors: 2,
//   engine: function () {
//     return "vrooom !!!";
//   },
// };

// console.log(vehicle.engine());

// const car = Object.create(vehicle); // Inherited

// console.log(car.engine());

// car.wheels = 4;
// console.log(car);
// console.log(car.doors);

// car.engine = function(){return "vroom vroom !!!"}

// console.log(car.engine());
// console.log(vehicle.engine());

// const tesla = Object.create(car);
// tesla.engine = function () {
//     return "Shhhhh"
// }

// console.log(tesla.engine());

// const movie ={
//     actor : "Suriya",
//     director : "K V",
//     music : "Harris",
//     producer : "Sun Pictures"
// }

// console.log(movie);
// console.log(Object.keys(movie))
// console.log(Object.values(movie))

// // Classes

// class Pizza {
//     constructor(pizzaType,pizzaSize,pizzaCrust){
//         this.type = pizzaType ;
//         this.size = pizzaSize ;
//         this.crust = pizzaCrust ;
//     }
//     bake(){
//         return `Baking a ${this.size} ${this.type} ${this.crust} crust Pizza`
//     }
// }

// const anotherPizza = new Pizza ("margaritta","small","thin")
// console.log(anotherPizza.bake())

// const anPizza = new Pizza ("Pepperonni","big","original")
// console.log(anPizza.bake());

// // Getter,Setter

// class Burger {
//     constructor(pizzaType,pizzaSize,pizzaCrust){
//         this.type = pizzaType ;
//         this.size = pizzaSize ;
//         this.crust = pizzaCrust ;
//         this.toppings = "ice"
//     }
//     getToppings(){
//         return this.toppings
//     }
//     setToppings(pizzaToppings){
//         this.toppings = pizzaToppings
//     }
//     bake(){
//         return `Baking a ${this.size} ${this.type} ${this.crust} crust Pizza with ${this.toppings}`
//     }
// }

// const anotherBurger = new Burger ("margaritta","small","thin")
// anotherBurger.setToppings("Cheese")
// console.log(anotherBurger.bake())

// // Pushing to an array

// class PushingBurger {
//     constructor(pizzaType,pizzaSize,pizzaCrust){
//         this.type = pizzaType ;
//         this.size = pizzaSize ;
//         this.crust = pizzaCrust ;
//         this.toppings = []
//     }
//     getToppings(){
//         return this.toppings
//     }
//     setToppings(pizzaToppings){
//         this.toppings.push(pizzaToppings)
//     }
//     bake(){
//         return `Baking a ${this.size} ${this.type} ${this.crust} crust Pizza with ${this.toppings}`
//     }
// }

// const pushinganotherBurger = new PushingBurger ("margaritta","small","thin")
// pushinganotherBurger.setToppings("Cheese")
// pushinganotherBurger.setToppings("CheeseCream")
// console.log(pushinganotherBurger.getToppings());
// console.log(pushinganotherBurger.bake())

// // Parent , Children

// class ParentBurger {
//     constructor(pizzaSize){
//         this.size = pizzaSize ;
//         this.crust = "original"
//     }
//     getToppings(){
//         return this.toppings
//     }
//     setToppings(pizzaToppings){
//         this.toppings.push(pizzaToppings)
//     }
// }

// class ChildrenBurger extends ParentBurger {
//     constructor(pizzaSize){
//         super(pizzaSize)
//         this.type = "Paperised"
//     }
//     slice(){
// console.log(`Our ${this.type} ${this.size} ${this.crust} has 8 pieces`);

//     }
// }

// const childrenBurger = new ChildrenBurger ("medium")
// childrenBurger.slice()

// // Accessing ( Private ,Public )

// class PublicPrivate {
//     crust = "original";
//     #sauce = "tomato" ;
//     constructor(sizePizza){
//         this.size = sizePizza ;
//     }
//     getCrust(){
//         return this.crust
//     }
//     setCrust(crustPizza){
//         this.crust = crustPizza
//     }
//     bake(){
//         return console.log(`Baking a ${this.size} ${this.crust} ${this.#sauce} pizza`);
//     }
// }

// const myPublicPrivate = new PublicPrivate("medium")

// console.log(myPublicPrivate.crust);
// console.log(myPublicPrivate.sauce);     // undefined [as it is private]

// // // Method Over-riding :

// // class Animal {
// //   speak() {
// //     console.log("Animal speaks");
// //   }
// //   walk() {
// //     console.log("Animal walks");
// //   }
// // }

// // const eagle = new Animal();
// // eagle.speak();

// // const lion = new Animal();
// // lion.speak();
// // console.log(lion.speak());

// // class Dog extends Animal {
// //   speak() {
// //     console.log("Dog barks");
// //   }
// // }

// // const pet = new Dog();
// // pet.speak();   // Dog barks (method overriding)