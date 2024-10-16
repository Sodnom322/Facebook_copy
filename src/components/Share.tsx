import React, { ChangeEvent, useRef, useState } from "react";
import photo from "../assets/person/2.jpeg";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

const Share = () => {
  const { user } = useSelector((state: RootState) => state.authSlice);

  const [file, setFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDesc>({
    defaultValues: {},
    mode: "onSubmit",
  });
  interface IDesc {
    userId: string | undefined;
    desc: string | undefined;
    img: string | undefined;
  }

  const onSubmit: SubmitHandler<IDesc> = async (data) => {
    const newPost: IDesc = {
      userId: user?._id,
      desc: data.desc,
      img: undefined,
    };
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const uploadResponse = await axios.post(
          "http://localhost:8800/api/upload",
          formData,
        );
        console.log(uploadResponse);
        const imgQ = uploadResponse.data?.imgPath; // Получаем URL изображения
        newPost.img = imgQ;

        await axios.post("http://localhost:8800/api/posts", newPost);
      } catch (error) {
        console.error("Ошибка загрузки", error);
      }
    } else {
      await axios.post("http://localhost:8800/api/posts", newPost);
    }
    window.location.reload();
  };

  return (
    <div className="w-full h-44 rounded-xl shadow-blue-500/35   shadow-md">
      <div className="p-3">
        <section className="flex items-center">
          <img
            loading="lazy"
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
            {...register("desc")}
          />
        </section>
        <hr className="m-5" />
        <form
          className="flex items-center justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex ml-4">
            <label
              htmlFor="file"
              className="flex items-center mr-4 cursor-pointer hover:bg-blue-100 rounded-lg p-1 transition-all"
            >
              <PermMedia htmlColor="tomato" className="mr-3 !text-3xl" />

              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setFile(e.target.files[0]);
                  }
                }}
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
