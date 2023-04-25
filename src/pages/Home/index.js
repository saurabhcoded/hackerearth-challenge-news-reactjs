import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [backdrop, setBackdrop] = React.useState(false);
  return (
    <div>
      <Outlet context={[backdrop, setBackdrop]} />
    </div>
  );
};

export default Home;
