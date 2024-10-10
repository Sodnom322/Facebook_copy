import React, { ChangeEvent, useRef, useState } from "react";
import photo from "../assets/person/2.jpeg";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Share = () => {
  const { user } = useSelector((state: RootState) => state.authSlice);
  const desc = useRef(null);
  const [file, setFile] = useState<FileList | null>(null);
  return (
    <div className="w-full h-44 rounded-xl shadow-blue-500/35   shadow-md">
      <div className="p-3">
        <section className="flex items-center">
          <img
            className="w-12 h-12 rounded-full object-cover mr-2"
            src={
              user?.profilePicture
                ? user.profilePicture
                : "/src/assets/person/noAvatar.png"
            }
            alt=""
          />
          <input
            className="border-none w-3/4 focus:outline-none"
            placeholder={`Whats in you mind ${user?.username}...`}
            ref={desc}
          />
        </section>
        <hr className="m-5" />
        <form className="flex items-center justify-between">
          <div className="flex ml-4">
            <label
              htmlFor="file"
              className="flex items-center mr-4 cursor-pointer hover:bg-blue-100 rounded-lg p-1 transition-all"
            >
              <PermMedia htmlColor="tomato" className="mr-3 !text-3xl" />
              <span className="text-lg font-light">Photo or Video</span>
              <input
                className="hidden"
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFile(e.target.files)
                }
              />
            </label>
            <div className="flex items-center mr-4 cursor-pointer">
              <Label className="mr-3 !text-3xl text-blue-500" />
              <span className="text-lg font-light">Tag</span>
            </div>
            <div className="flex items-center mr-4 cursor-pointer">
              <Room htmlColor="green" className="mr-3 !text-3xl" />
              <span className="text-lg font-light">Location</span>
            </div>
            <div className="flex items-center mr-4 cursor-pointer">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="mr-3 !text-3xl "
              />
              <span className="text-lg font-light">Mood</span>
            </div>
          </div>
          <button className="border-none p-2 rounded-md bg-green-600 font-normal mr-5 text-white cursor-pointer">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
