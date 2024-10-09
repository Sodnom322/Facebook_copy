import React from "react";
import { IUser } from "..";

const OnlineUsers: React.FC<IUser> = ({ coverPicture, username }) => {
  return (
    <li className="flex items-center mb-4 cursor-pointer hover:bg-gray-100">
      <div className="mr-3 relative ">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={coverPicture}
          alt=""
        />
        <span className="w-3 h-3 rounded-full bg-green-600 absolute border border-2 border-white -top-0 left-8"></span>
      </div>
      <span className="font-semibold">{username}</span>
    </li>
  );
};

export default OnlineUsers;
