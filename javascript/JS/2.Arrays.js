// Arrays

const myArray = [];

myArray[0] = "Hi";
myArray[1] = "Hello";
myArray[2] = "Vanakkam";

console.log(myArray);
console.log(myArray.length);
console.log(myArray[0]);
console.log(myArray[myArray.length - 1]);    // To show last element

const AddElement = myArray.push("Makkalae"); // To add element at last
console.log(myArray);
console.log(AddElement);                       // Show the length

const DelElement = myArray.pop()               // To delete last element 
myArray.pop("Makkalae") ;                      // Its a wrong syntax because , like push("Makkalae") we cant send a particular value to do the delete process .
console.log(myArray);
console.log(DelElement);                       // Show the element deleted

const AddElementAtFirst = myArray.unshift("Ahhh !")     // To add element at first
console.log(myArray);
console.log(AddElementAtFirst);                        // Show the length

const DelElementAtFirst = myArray.shift()               // To delete element of first
myArray.shift("Makkalae") ;                             // Its a wrong syntax because , like push("Makkalae") we cant send a particular value to do the delete process .
console.log(myArray);
console.log(DelElementAtFirst);                         // Show the element deleted

// SPLICE [add,remove,or replace in between]

// [Array.splice(START_VALUE (based on index),COUNT (from selected index) , insert/replacable value)]
// Add 
console.log('splice add :',myArray.splice(1,0,"Haiiii","Byeeeeeeeee","Varatamamaedrrrrrrrrr"));
console.log(myArray)                    // 1-> Start Value , 0-> Count , Hai.... -> Insert values .
                                        // Here as the count is 0 , the insert value gets inserted into the Array
                                        //  after the start value index .

// Remove
console.log('splice remove :',myArray.splice(1,2));
console.log(myArray);                   // 1-> Start Value , 2-> Count , So the elements 
                                        // from index position '1' till count 2 gets removed


// Replace
console.log('splice replace :',myArray.splice(1,1,"Haiiiii"));
console.log(myArray);                   // 1-> Start Value , 1-> Count , So the elements 
                                        // from index position '1' till count 1 gets replaced with
                                        // the elements mentioned after , ("Haiiiii")

// Delete [not advicable at it create empty undefined]
console.log(delete myArray[2]);         // The index position mentioned element gets deleted and creates an empty item .
//       // or
// console.log(delete(myArray[2]))             // Creates An empty item
console.log(myArray[2]);



// SLICE

const a = "987654";
const newArray = a.slice(1,4);      // 1-> Start Value , 4-> Before the end value 
console.log('slice' ,newArray);     // Can be used for Array and String as well

console.log(newArray[2]);
console.log(a);


// Reverse
console.log("myArray :", myArray);

const reversedArray = myArray.reverse()
console.log(reversedArray);

// Join

const joinedArray = myArray.join("")
console.log("joinedArray",joinedArray);

// Split

const splittedArray = joinedArray.split("a")
console.log(splittedArray);

// Joining two arrays

const myArrayA = ['Its','Array','One']
const myArrayB = ['Its','Array','Two']

console.log(myArrayA);
console.log(myArrayB);

// Concat method :
const joinedArraysUsingConcat = myArrayA.concat(myArrayB)
console.log(joinedArraysUsingConcat);

// Spread operator method :
const joinedArraysUsingSpreadOperator = [...myArrayA,...myArrayB]
console.log(joinedArraysUsingSpreadOperator);

const earnMoneyA = ["FronEnd","BackEnd","FullStack"]
const earnMoneyB = ["AI","Blockchain","DataAnalystics"]

const growMoneyA = ["Stock","RealEstate","FixedIncome"]
const growMoneyB = ["Options","Futures"]

const giveMoney = ["QualityEducation"]

console.log(earnMoneyA[1],growMoneyB[1]);           // One Dimensional

const earnMoney = [earnMoneyA,earnMoneyB]
const growMoney = [growMoneyA,growMoneyB]

console.log(earnMoney[0][1],growMoney[1][1]);       // Two Dimensional

const dhuddu = [earnMoney,growMoney,giveMoney]

console.log(dhuddu[0][0][1],dhuddu[1][1][1]);       //  Three Dimensional











