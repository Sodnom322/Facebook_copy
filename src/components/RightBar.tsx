import gift from "../assets/gift.png";
import ad from "../assets/add.png";
import add from "../assets/person/9.jpeg";
import { IUser, Users } from "../../src/index";
import OnlineUsers from "./OnlineUsers";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

type UserRightBar = Partial<IUser>;
type UserAxios = Pick<IUser, "_id" | "username" | "profilePicture">;

const RightBar: React.FC<UserRightBar> = ({
  city,
  from,
  relationship,
  username,
  _id,
}) => {
  const [friends, setFriends] = useState<UserAxios[]>([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8800/api/users/friends/${_id}`,
        );
        setFriends(data);
        console.log(data);
      } catch (error) {}
    };

    getFriends();
  }, [_id]);
  const HomeRightBar = () => {
    return (
      <>
        <div className="flex items-center">
          <img className="w-10 h-10 mr-3" src={gift} alt="gift" />
          <span className="font-thin text-base">
            <b>Pola Foster</b> and <b>3 other friends</b> hav a birtday today
          </span>
        </div>
        <img className="w-full rounded-lg my-8" src={ad} alt="" />
        <h4 className="mb-5">Online Friends</h4>
        <ul className="p-0 m-0 list-none ">
          {Users.map((user) => (
            <OnlineUsers
              coverPicture={user.profilePicture}
              createdAt={""}
              email={""}
              _id={""}
              key={user.id}
              {...user}
            />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="text-xl font-medium mb-3">User info</h4>
        <div className="mb-8">
          <div className="mb-2">
            <span className="font-medium mr-4 text-gray-400">City:</span>
            <span className="font-extralight">{city}</span>
          </div>
          <div className="mb-2">
            <span className="font-medium mr-4 text-gray-400">From:</span>
            <span className="font-extralight">{from}</span>
          </div>
          <div className="mb-2">
            <span className="font-medium mr-4 text-gray-400">
              Relationship:
            </span>
            <span className="font-extralight">
              {relationship?.toString() === "1"
                ? "Single"
                : relationship?.toString() === "2"
                  ? "Married"
                  : ""}
            </span>
          </div>
        </div>
        <h4>User friends</h4>
        {friends?.map((friend) => (
          <Link to={`profile/${friend.username}`}>
            <div className="flex flex-wrap gap-3">
              <div className="flex flex-col mb-5 cursor-pointer">
                <img
                  className="w-24 h-24 object-cover rounded-lg"
                  src={add}
                  alt=""
                />
                <span>{friend.username}</span>
              </div>
            </div>
          </Link>
        ))}
      </>
    );
  };

  return (
    <aside className="grow-[3] w-1/5">
      <section className="pt-5 pr-5">
        {city ? <ProfileRightBar /> : <HomeRightBar />}
      </section>
    </aside>
  );
};

export default RightBar;
