import Link from "next/link";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/login");
  };

  return (
    <>
      <div>Register</div>
      <Link href="/auth/login">Login</Link>

      <button onClick={handleClick}>click to login</button>
    </>
  );
};

export default Register;
