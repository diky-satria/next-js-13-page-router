import Navbar from "../Navbar";

type Props = {
  children: React.ReactNode;
};

const Dashboard = (props: Props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Dashboard;
