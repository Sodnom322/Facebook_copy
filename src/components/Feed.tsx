import React, { useEffect, useState } from "react";
import Share from "./Share";
import Post from "./Post";
import axios from "axios";
import { IPosts, IUser } from "..";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type TFeed = Pick<IUser, "username">;

const Feed: React.FC<TFeed> = ({ username }) => {
  const [post, setPosts] = useState<IPosts[]>();
  const { user } = useSelector((state: RootState) => state.authSlice);
  useEffect(() => {
    const fetcedPosts = async () => {
      const res = username
        ? await axios.get("http://localhost:8800/api/posts/profile/" + username)
        : await axios.get(
            `http://localhost:8800/api/posts/timeline/${user?._id}`,
          );
      setPosts(
        res.data.sort((p1: IUser, p2: IUser) => {
          return (
            new Date(p2.createdAt).getTime() - new Date(p1.createdAt).getTime()
          );
        }),
      );
    };

    fetcedPosts();
  }, [username, user?._id]);

  if (!post) {
    return "Loading..";
  }
  console.log(post);

  return (
    <div className="grow-[2]">
      <div className="p-5">
        <Share />
        {post?.map((post) => <Post key={post._id} {...post} />)}
      </div>
    </div>
  );
};

export default Feed;
