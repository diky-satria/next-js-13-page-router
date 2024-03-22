import Link from "next/link";

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <Link href="/auth/register">Register</Link>
    </>
  );
};

export default Login;
