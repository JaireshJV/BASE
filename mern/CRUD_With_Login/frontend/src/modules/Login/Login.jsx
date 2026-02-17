import { useEffect, useState } from "react";
import { deleteUser, getLogin, postLogin } from "../../services/apiservices";
import api from "../../config/request";
import {Button, Form, Input} from "antd"
import "./style.css"

export const Login = () => {
  const [users, setUsers] = useState([]);
  const [data,setData] = useState([]) ;

//   const getUser = async () => {
//     try {
//       const response = await api.get("/user");
//       console.log(response.data.data, "data");
//       setUsers(response.data.data);
//     } catch (e) {
//       console.log("Error :", e.message);
//     }
//   };

//   useEffect(() => {
//     getUser();
//   }, []);

useEffect(() => {
  (async () => {
    try {
      const data = await getLogin();
      console.log(data, "login data");
    } catch (e) {
      console.error(e);
    }
  })();
}, []);


const handleOnclick =async (e)=>{
  e.preventDefault();

    console.log('clicked');
    
    const postvalue = await postLogin(data) ;
    alert(postvalue.message)  ;

//     setTimeout(()=>{
// console.log('Yeah it worked');

//     },2000)
}

const deleteMe =async()=>{
    try{
await deleteUser(6)
    }
    catch(e){
        console.log("Error" ,e.message);
        
    }
}

const handleOnChange =(e)=>{
setData({...data,[e.target.name] : e.target.value})
console.log(data,'dddddddddd');

}

  return (
    <>
      <h2>User List</h2>

      {users?.map((user) => (
        <p key={user._id}>{user.username}<span>{user.password}</span></p>
      ))}
<form onSubmit={handleOnclick}>
    <label>USER NAME :</label>
    <input type="text" name="username" onChange={handleOnChange}/>
    <label>PASSWORD</label>
    <input type="password" name="password" onChange={handleOnChange}/>
    <button type="submit"> SUBMIT </button>
</form>
{/* <Form className="form-style" onFinish={handleOnclick}>
<Form.Item label={"USER NAME :"} name={"username"}>
    <Input />
</Form.Item>
<Form.Item label={"PASSWORD :"} name={"password"}>
    <Input />
</Form.Item>
<Form.Item label={null}>
    <Button htmlType="submit"> SUBMIT </Button>
</Form.Item>
</Form> */}
      {/* <button onClick={handleOnclick}>CLICK ME</button>
      <button onClick={deleteMe}>DELETE ME</button> */}
    </>
  );
};
