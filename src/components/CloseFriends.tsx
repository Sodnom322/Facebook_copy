import React from "react";
import { IUser } from "..";

const CloseFriends: React.FC<IUser> = ({ profilePicture, username }) => {
  return (
    <li className="flex items-center mb-4">
      <img
        className="w-8 h-8 rounded-full object-cover mr-3"
        src={profilePicture}
        alt="avatar"
      />
      <span>{username}</span>
    </li>
  );
};

export default CloseFriends;
