import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import RightBar from "../components/RightBar";
import Feed from "../components/Feed";
import axios from "axios";
import { IUser } from "..";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState<IUser>();

  let username = useParams().username;

  useEffect(() => {
    const fetcedUser = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/users/?username=${username}`,
      );
      setUser(res.data);
    };
    fetcedUser();
  }, []);

  console.log(user);
  return (
    <>
      <Header />
      <main className="flex ">
        <SideBar />
        <div className="w-4/5 ">
          <div className="">
            <div className="h-80 relative">
              <img
                className="w-full h-64 object-cover"
                src={
                  user?.coverPicture
                    ? user.coverPicture
                    : "http://localhost:5173/src/assets/person/noCover.png"
                }
                alt="asf"
              />
              <img
                className="w-40 h-40 rounded-full object-cover absolute left-0 top-36 right-0 m-auto border-2 border-white "
                src={
                  user?.profilePicture
                    ? user.profilePicture
                    : "http://localhost:5173/src/assets/person/noAvatar.png"
                }
                alt="asf"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-3xl">{user?.username}</h4>
              <p className="font-extralight">{user?.desc}</p>
            </div>
          </div>
          <div className="flex w-full">
            <Feed username={username} />
            <RightBar {...user} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
