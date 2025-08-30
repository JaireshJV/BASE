

// Async/Await

// Basic logic 

console.log('First');
console.log('Second');
console.log('Third');

console.log("First")
setTimeout(()=>console.log("Second"),2000)     // async
console.log("Third");

const jai = async () => {
  try {
    const res = await fetch("kkk");
  } catch (e) {

  }
};

// const vasy = async () =>{

// try{
// const response = await fetch("https://jsonplaceholder.typicode.com/use");

// // if(!response.ok){
// //    throw new Error(`HTTP error! Status: ${response.status}`);
// // }

// const data = await response.json();
// console.log(data);

// }catch (e){
// console.error("Unexpected Error", e.message);
// }

// }

// vasy();

// const makeError =()=>{
//     try{
//         const name = "Dhuuduu"
//         name = "Jai"
//         console.log(name);
        
//     }
//     catch(err){
//         console.log(err);
//         console.warn(err);    // In yellow
//         console.error(err);   // In red
//         console.table(err);
//         console.error(err.stack);     // In detail
//     }
// }

// makeError()

// const makeError2 =()=>{
//     // try{
//     //     throw new customError ("This is a custom Error")
//     // }
//     try{
//         const name = 'jai';

//         throw new Error ("This is a custom Error")
//     }
//     catch (err){
//         console.error(err.message);
//     }
// }

// makeError2()

// const makeErrorFinally = () =>{
//     let i = 0 ;
//     while(i<=5){
//         try{
//             if(i%2 == 0){
//                 console.log(`${i} is an even number`);
//             }
//             else{
//                 throw new Error (`${i} is an odd number`)
//             }
//         }
//         catch(err){
//             console.error(err);
//         }
//         finally{
//             console.log("Itz Finally");
//             i ++
//         }
//     }
// }

// makeErrorFinally();


// const jaibala = async()=>{
//   try{
//    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

//    if(!res.ok){
//     // console.log("Response Status:",res.status)
//     if(res.status == 404){
//       throw new Error("User Not Found:" + `${res.status}`);
//     }else{
//     throw new Error(`Data's Fetching Failed. Status:${res.status}`);
//     }
//    }

//    const data = await res.json();
//    console.log(data);
//   }
//   catch(e){
//     console.log("Unexpected error", e.message);
//   }
//   finally{
//     console.log("Execution Completed");
//   }
// }

// jaibala();


// Async/Await => in Try/Catch Problems

// Problem 1: Fetch a list of posts

// Write an async function to fetch posts from
// https://jsonplaceholder.typicode.com/posts.

// If status is 404, throw "Posts Not Found"

// Else, throw "Failed to fetch posts"

// Log posts if successful.

// const posts = async () => {
//   try {
//     const postList = await fetch("https://jsonplaceholder.typicode.com/posts");

//     if (!postList.ok) {
//       if (postList.status == 404) {
//         throw new Error("Posts Not Found");
//       } else {
//         throw new Error("Failed to fetch posts");
//       }
//     }
//     const data = await postList.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// posts();

// Problem 2: Fetch comments for a post

// Fetch comments from
// https://jsonplaceholder.typicode.com/posts/1/comments.

// If status is 500, throw "Server Error"

// Otherwise, throw "Comments could not be loaded"

// Log the first comment’s email on success.

// const comment = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
//     if(!res.ok){
//       if(res.status == 500){
//         throw new Error("Server Error")
//       }
//       else{
//         throw new Error("Comments could not be loaded")
//       }
//     }
//     const data = await res.json();
//     console.log("First comment email:", data[0]?.email || "No Email Found");

//   } catch (error) {
//     console.log("Unexpected Error", error.message);
//   } finally {
//     console.log("Code Excecuted");
//   }
// };

// comment();

// 3.Problem 3: Fetch albums

// Fetch albums from
// https://jsonplaceholder.typicode.com/albums.

// If status is not OK, throw "Albums API Failed"

// If albums list is empty, throw "No Albums Found"

// Log total number of albums.

// const albums = async () => {
//   try {
//     const album = await fetch("https://jsonplaceholder.typicode.com/albums");

//     if (!album.ok) {
//       throw new Error("Albums API Failed");
//     }

//     const data = await album.json();

//     if (data.length == 0) {
//       throw new Error("No Albums Found");
//     }else{
//       console.log("Total Albums: ", data.length);
//     }
//   } catch (error) {
//     console.log("Unexpected Error Occured", error.message);
//   } finally {
//     console.log("Execution Finished");
//   }
// };

// albums();

// Problem 4: Fetch user details (invalid ID test)

// Fetch a user with id 9999 from
// https://jsonplaceholder.typicode.com/users/9999.

// If status is 404, throw "User Not Found"

// Otherwise, throw "Unexpected User Fetch Error"

// If user found, log the username.

// const users = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users/9999");
    
//     if (!res.ok) {
//       if (res.status === 404) {
//         throw new Error("User Not Found");
//       } else {
//         throw new Error("Unexpected User Fetch Error");
//       }
//     }
//     const data = await res.json();

// if(!data || !data.username){
//   throw new Error("User Not Found in response");
// }
//     console.log("username :", data.username);

//     // const all_username = data?.map((user)=>{
//     //   return user?.username ;
//     // })

//     // console.log('all_username',all_username);
    
//   } catch (error) {
//     console.log("unexpected error", error.message);
//   } finally {
//     console.log("Always Namma than");
//   }
// };

// users()


// Problem 5: Chained API (User → Posts)

// Fetch user id=1 from
// https://jsonplaceholder.typicode.com/users/1.

// If success, use that id to fetch posts from
// https://jsonplaceholder.typicode.com/posts?userId=1.

// If either request fails, throw proper error.

// Log the first post’s title.

// const Chained = async()=>{
//   try{
//     const res  = await fetch("https://jsonplaceholder.typicode.com/users/1");  
//     if(!res.ok){
//       throw new Error("User Fetch Failed :" + res.status)
//     }
//    const data = await res.json();
//    const id = data.id;
   
//     if (!id) {
//       throw new Error("UserId Not Found From this Response");
//     }
//     if(id){
//        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
//        if(!res.ok){
//         throw new Error(`Posts fetch failed: ${res.status}`);
//        }

//        const data = await res.json();
//        console.log("Post Title :", data[0]?.title || "Post Not Found")
//     }
//     else{
//         throw new Error("UserId Not Found From this Response");
//     }
//   }
//   catch(error){
//     console.log("Unexpected Error", error.message);
//   }
//   finally{
//    console.log("Execution Finished");
//   }
// }

// Chained();

// 1.Chocklate Examples
let getChocolate = new Promise((resolve, reject) => {
  let shopOpen = true; // Change to false to test rejection

  console.log("Friend is going to the shop...");

  setTimeout(() => {
    if (shopOpen) {
      resolve("🍫 Here is your chocolate!");
    } else {
      reject("❌ Sorry, shop is closed.");
    }
  }, 2000); // Wait 2 seconds
});

getChocolate
  .then((message) => {
    console.log(message); // Runs if resolved
  })
  .catch((error) => {
    console.log(error); // Runs if rejected
  });

// Add Numbers Examples
function addNumbers(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a === "number" && typeof b === "number") {
      resolve(a + b);
    } else {
      reject("❌ Both inputs must be numbers!");
    }
  });
}

addNumbers(4, "9")
  .then((msg) => {
    console.log(msg * 2);
  })

  .catch((err) => {
    console.log(err);
  });


  let pizzaAvailable = Math.random() > 0.3

  console.log("Pizza", pizzaAvailable);


  // Pizza Shop Examples

  function orderPizza(flavor) {
  return new Promise((resolve, reject) => {
    console.log(`🛵 Ordering a ${flavor} pizza...`);

    setTimeout(() => {
      let pizzaAvailable = Math.random() > 0.3; // 70% chance it's available

      if (pizzaAvailable) {
        resolve(`🍕 Your ${flavor} pizza is here!`);
      } else {
        reject("❌ Sorry, pizza is out of stock.");
      }
    }, 2000); // Wait 2 seconds
  });
}

// Use the Promise
orderPizza("Cheese Burst")
  .then((message) => {
    console.log("SUCCESS:", message);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  })
  .finally(() => {
    console.log("Order process finished ✅");
  });


  // Using Try Catch to Handle a Promise
  function orderPizza(flavor) {
  return new Promise((resolve, reject) => {
    console.log(`🛵 Ordering a ${flavor} pizza...`);

    setTimeout(() => {
      let pizzaAvailable = Math.random() > 0.3; // 70% chance of success

      if (pizzaAvailable) {
        resolve(`🍕 Your ${flavor} pizza is here!`);
      } else {
        reject("❌ Sorry, pizza is out of stock.");
      }
    }, 2000); // wait 2 seconds
  });
}
async function getPizza() {
  try {
    // Wait for the pizza promise to resolve
    const message = await orderPizza("Cheese Burst");
    console.log("SUCCESS:", message);
  } catch (error) {
    // If promise rejects, handle the error here
    console.log("ERROR:", error);
  } finally {
    console.log("Order process finished ✅");
  }
}

// Call the async function
getPizza();
