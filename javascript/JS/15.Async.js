// Async / Await

// Syncronized excecution way of JavaScript [ Line by line excecution ] :

// console.log("First");
// console.log("Second");
// console.log("Third");


// Asyncronized way of excecution in JavaScript :

// Asynchronous allows other operations to run while waiting for completion.

// console.log("First");
// setTimeout(() => console.log("Second"), 2000); // async
// console.log("Third");




// Modern way of handling promises :

// Async / Await is used to write the asynchronous functions in synchronous way .
// The function may not look like a promise but actually the function runs as a promise .
// Which means when we call this function , it will give us either resolved data or rejected value through the promise .


const jai = async () => {
  try {
    const res = await fetch("https://json-placeholder.mock.beeceptor.com/roles")
    const data = await res.json() ;
    console.log(data,'datadata');
    
  } catch (e) {
    console.log(e,'error')  
  }
};

// jai() ;



const vasy = async () =>{

try{
const response = await fetch("https://jsonplaceholder.typicode.com/user");

if(!response.ok){
   throw new Error(`HTTP error API not found !!! Status : ${response.status}`);
}

const data = await response.json();
console.log(data);

}catch (e){
console.error(e.message);
}

}

// vasy();




// Traditional way of promises :
//where we handle API call , data fetching ,.then and catch

const jaii = () => {
  fetch("https://json-placeholder.mock.beeceptor.com/roles")
    .then(res => res.json())
    .then(data => {
      console.log(data, 'datadata');
    })
    .catch(err => {
      console.log(err, 'error');
    });
};

// jaii();


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








