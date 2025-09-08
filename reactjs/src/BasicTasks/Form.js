import { useState } from "react";
import { Form as FormAnt, Input, InputNumber } from "antd";

export const Form = () => {
  const [value, setValue] = useState(null);
  const [form,setForm] = useState({name:"",age:""})

  const handleOnSubmit = (val) => {
    setValue(val);
    console.log(value, "vallllll");
  };

  // Alternative

  const handleOnChange =(e)=>{
setForm({...form,[e.target.name] : e.target.value})
    console.log(e.target.value,'formvalue1');

  }

  const handleSubmitDefault = (e) => {
    
    e.preventDefault()
    console.log(form,'formvalue');
    setValue(form);
  };



  return (
    // <div>
    //   <h1>FORM</h1>
    //   <FormAnt onFinish={handleOnSubmit}>
    //     <label>NAME : </label>
    //     <FormAnt.Item name="name">
    //     <Input />
    //     </FormAnt.Item>
    //     <label>AGE : </label>
    //     <FormAnt.Item  name="age" >
    //     <InputNumber />
    //      </FormAnt.Item>
    //      <FormAnt.Item>
    //     <button type="submit">SUBMIT</button>
    //     </FormAnt.Item>
    //   </FormAnt>
    //   {
    //     value &&(
    //         <>
    //         {value.name}
    //          {value.age}
    //         </>
    //     )
    //   }
    // </div>

    <div>
      <form onSubmit={handleSubmitDefault}>
        <label>NAME</label>
        <input type="text" name="name" onChange={handleOnChange} />
        <label>AGE</label>
        <input type="number" name="age" onChange={handleOnChange}/>
        <button type="submit">SUBMIT</button>
      </form>
      {value && (
        <>
        NAME : {value.name} <br/>
        AGE : {value.age}
        </>
      )}
    </div>
  );
};
