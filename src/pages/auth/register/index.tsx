import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

import styles from "./register.module.scss";
import axios from "@/interceptor/axios";

const Register = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      let response = await axios.post("/api/register", {
        email,
        fullname,
        password,
      });
      if (response.status == 200) {
        router.push("/auth/login");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>register</title>
      </Head>
      <div className={styles.container}>
        <form
          name="normal_login"
          className={`${styles.form} login-form`}
          onSubmit={handleSubmit}
        >
          <h3 className={styles.title}>Register</h3>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="fullname"
            rules={[{ required: true, message: "Please input your Fullname!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Fullname"
              onChange={(e) => setFullname(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </Form.Item>
          <Form.Item>
            Have already an account!{" "}
            <Link href="/auth/login">please login</Link>
          </Form.Item>
        </form>
      </div>
    </>
  );
};

export default Register;
