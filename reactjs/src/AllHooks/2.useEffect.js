import { useEffect, useState } from "react";

// useEffect runs side effects in a component.

const UseEffectPage = () => {
  const [showdata, setShowData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      setShowData(data);
      console.log(data, "gotdata");

      return data;
    } catch (e) {
      console.log("Error :", e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>USE EFFECT</h1>
      {
        showdata?.map((data,i)=>(
            <table key={i}>
                <tr>
                    <th>TITLE</th>
                    <td>{data?.title}</td>
                </tr>
            </table>
        ))
      }
    </div>
  );
};

export default UseEffectPage;
