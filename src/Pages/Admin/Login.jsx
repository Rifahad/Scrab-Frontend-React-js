import React from "react";
import { Button, Form, Input } from "antd";
import Axios from "../../Instance/Instance";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await Axios.post("/AdminLogin", values);
      localStorage.setItem("token", response.data.token);

      if (response.status === 200) {
        navigate("/admin");
      } else {
        throw new Error("Unauthorized");
      }
    } catch (error) {
      console.error("There was an error!", error);

      // SweetAlert to show message if status is not 200
      Swal.fire({
        title: "Error",
        text: "I think you are in the wrong place",
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "Go to Home",
        customClass: {
          confirmButton: "bg-primary hover:bg-green-600 text-white", // Apply Tailwind classes for green color
          cancelButton: "bg-gray-300 text-black", // Optional: Customize cancel button style
        },
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/home");
        }
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo); // Optional, for debugging
  };

  return (
    <div
      className={`flex w-full h-screen items-center justify-center bg-cover bg-[url('../../src/assets/BgAuth.jpg')]`}
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
