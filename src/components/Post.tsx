import React, { useEffect, useState } from "react";
import heart from "../assets/heart.png";
import likepng from "../assets/like.png";
import { MoreVert } from "@mui/icons-material";
import { IPosts, IUser } from "..";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Post: React.FC<IPosts> = ({
  createdAt,
  desc,
  likes,
  userId,
  img,
  _id,
}) => {
  const [liked, setLiked] = useState(likes?.length || 0);
  const [isliked, isSetLiked] = useState(false);
  const [user, setUser] = useState<IUser>();
  const { user: currentUser } = useSelector(
    (state: RootState) => state.authSlice,
  );

  useEffect(() => {
    if (currentUser?._id) {
      isSetLiked(likes?.includes(currentUser._id) ?? false);
    }
  }, [currentUser?._id, likes]);

  useEffect(() => {
    const fetcedUser = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/users?userId=${userId}`,
      );
      setUser(res.data);
    };
    fetcedUser();
  }, []);

  if (!user) {
    return "Loading...";
  }

  const addLike = () => {
    try {
      axios.put("http://localhost:8800/api/posts/" + _id + "/like", {
        userId: currentUser?._id,
      });
    } catch (error) {
      console.log(error);
    }
    setLiked(isliked ? liked - 1 : liked + 1);
    isSetLiked(!isliked);
  };

  return (
    <div className="w-full rounded-md shadow-md shadow-blue-500/35 my-7 mx-0">
      <div className="p-3">
        <section className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to={`profile/${user.username}`}>
              <img
                className="w-10 h-10 object-cover rounded-full"
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : "src/assets/person/noAvatar.png"
                }
                alt="post img"
              />
            </Link>
            <span className="text-lg font-medium mx-3">{user.username}</span>
            <span className="text-sm font-medium mx-3">
              {format(createdAt)}
            </span>
          </div>
          <div>
            <MoreVert className="cursor-pointer" />
          </div>
        </section>
        <section className="my-5  ">
          <span>{desc}</span>
          <img
            className="mt-5 w-full max-h-126 object-fill"
            src={img}
            alt="post"
          />
        </section>
        <section className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              onClick={addLike}
              className="text-sm h-6 w-6 mr-1 cursor-pointer"
              src={likepng}
              alt=""
            />
            <img
              onClick={addLike}
              className="text-sm h-6 w-6 mr-1 cursor-pointer"
              src={heart}
              alt=""
            />
            <span className="text-lg">{liked} people like it</span>
          </div>
          <div>
            <span className="cursor-pointer border border-dashed border-b-gray-600">
              {/*   {comment} */} comments
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Post;
