import React from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:7000/AdminLogin", values);
      localStorage.setItem("token", response.data.token);
      if (response.status(200)) {
        navigate("/admin");
      }else{
        navigate("/");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo); // Optional, for debugging
  };

  return (
    <div
      className={`flex w-full h-screen items-center justify-center bg-cover bg-[url('./assets/admin3.jpg')] md:bg-[url('./assets/admin1.jpg')] `}
    >
      <div className="p-4 md:p-0">
        <Form
          className="bg-white bg-opacity-5 p-4 rounded-lg shadow-sm shadow-black"
          name="basic"
          labelCol={{
            xs: { span: 24 },
            sm: { span: 8 },
          }}
          wrapperCol={{
            xs: { span: 24 },
            sm: { span: 16 },
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
            style={{ color: "black" }}
            className="text-white"
          >
            <Input className="bg-transparent" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            style={{ color: "black" }}
            className="text-white"
          >
            <Input.Password className="bg-transparent" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              xs: { offset: 0, span: 24 },
              sm: { offset: 8, span: 16 },
            }}
          >
            <Button className="bg-green-500" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
