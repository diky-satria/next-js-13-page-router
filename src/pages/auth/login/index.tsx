import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

import styles from "./login.module.scss";
import axios from "@/interceptor/axios";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const { push, query } = useRouter();
  const { data }: any = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const callbackUrl: any = query.callbackUrl || "/admin";

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      let response = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl,
      });

      if (!response?.error) {
        push(callbackUrl);
      } else {
        const err = JSON.parse(response.error);
        setError(err.message);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>login</title>
      </Head>
      <div className={styles.container}>
        <form
          name="normal_login"
          className={`${styles.form} login-form`}
          onSubmit={handleSubmit}
        >
          <h3 className={styles.title}>Login</h3>
          {error && <p className={styles.error}>{error}</p>}
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
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            Don't Have an account!{" "}
            <Link href="/auth/register">please register</Link>
          </Form.Item>
        </form>
      </div>
    </>
  );
};

export default Login;
