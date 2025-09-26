import { Form, Input, InputNumber } from "antd";
import React from "react";

const TaskForm = () => {
  const handleCheckChange = (e) => {
    console.log(e.target.value, "checkkkk");
  };

  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>TaskForm</h1>
      <Form onFinish={(val) => console.log(val, "values")}>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Age" name="age" value={22}>
          <InputNumber style={{ width: "100%" }} value={222}  />
        </Form.Item>
        <Form.Item label="Date of Birth" name="dob">
          <Input />
        </Form.Item>
        <input onInput={handleCheckChange} />
        <div style={{ display: "flex", placeContent: "center" }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "40px",
              width: "120px",
            }}
            type="submit"
          >
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
};

export default TaskForm;
