import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import RightBar from "../../components/RightBar";
import Feed from "../../components/Feed";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.authSlice);

  useEffect(() => {
    if (!user) {
      navigate("/register");
    }
  }, [user]);

  return (
    <>
      <Header />
      <main className="flex w-full ">
        <SideBar />
        <Feed />
        <RightBar />
      </main>
    </>
  );
};

export default HomePage;
