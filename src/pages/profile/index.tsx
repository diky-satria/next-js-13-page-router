import Head from "next/head";
import Dashboard from "../../components/layout/Dashboard";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data }: any = useSession();
  return (
    <>
      <Head>
        <title>profile</title>
      </Head>
      <Dashboard>
        <h1>Profile</h1>
        <h3>{data && data.user?.fullname}</h3>
      </Dashboard>
    </>
  );
};

export default Profile;
