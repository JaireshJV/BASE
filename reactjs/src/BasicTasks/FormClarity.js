import { Button, Form, Input, InputNumber } from "antd";

const FormClarity = () => {
  const onSubmiting = (val) => {
    val.preventDefault();
    console.log(val.target[0],"values");
    
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>Clarity Form</h1>
      <form onSubmit={onSubmiting}>
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="age" />
        <button type="submit">ADD</button>
      </form>

      {/* <Form onFinish={(values)=> console.log(values,'values')}>
        <Form.Item name={"name"}>
          <Input placeholder="Name"/>
        </Form.Item>
        <Form.Item name={"age"}>
          <InputNumber placeholder="Age" />
        </Form.Item>
        <Button htmlType="submit">ADD</Button>
      </Form> */}
    </div>
  );
};

export default FormClarity;
