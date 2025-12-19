import { useEffect, useState } from "react";

const APIFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => 
        setData(data)
      
    )

  }, []);

  console.log(data, "datadata");

  return <>
  <h1> HI ABISHETH !</h1>
  </>;
};

export default APIFetch;



//   useEffect(()=>{
//     const fetchLocations = async()=>{
//     try{
//       const response = await instance.get("/locations");

//         const data = response.data.data.map((location) => ({
//           locationId: location.locations_id,
//           locationType: location.locations_type,
//           latitude: location.latitude,
//           longitude: location.longitude,
//         }));

//       console.log("Locations Data", data);
//       setLocations(data);
//     }
//     catch(error){
//       console.error("❌ Error fetching Teams:", error);
//     };

//     }
//     fetchLocations();
//   }, []);