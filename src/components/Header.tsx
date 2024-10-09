import { Search, Person, Chat, NotificationAdd } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Header = () => {
  const { user } = useSelector((state: RootState) => state.authSlice);
  console.log(user);
  return (
    <header className="flex items-center sticky z-10 top-0 h-[50px] w-full bg-blue-400">
      <div className="grow-[3] ">
        <Link to={"/"}>
          <span className="text-2xl ml-5 font-bold text-white cursor-pointer hover:text-gray-200">
            Faceebook
          </span>
        </Link>
      </div>
      <div className="grow-[5] ">
        <div className="flex items-center w-full h-8 bg-white rounded-xl">
          <Search className="ml-3 " />
          <input
            className="border-none w-8/12 focus:outline-none "
            placeholder="search..."
          />
        </div>
      </div>
      <div className="grow-[4] flex  items-center justify-around text-white">
        <div>
          <span className="mr-3 text-base cursor-pointer hover:text-gray-200">
            HomePage
          </span>
          <span className="mr-3 text-base cursor-pointer hover:text-gray-200">
            TimeLine
          </span>
        </div>
        <div className="flex">
          <div className="mr-3 cursor-pointer relative hover:scale-110 transition-all">
            <Person />
            <span className="w-4 h-4 bg-red-500 rounded-md text-white text-sm absolute flex items-center justify-center top-0 left-4">
              1
            </span>
          </div>
          <div className="mr-3 cursor-pointer relative hover:scale-110 transition-all">
            <Chat />
            <span className="w-4 h-4 bg-red-500 rounded-md text-white text-sm absolute flex items-center justify-center top-0 left-4">
              1
            </span>
          </div>
          <div className="mr-3 cursor-pointer relative hover:scale-110 transition-all">
            <NotificationAdd />
            <span className="w-4 h-4 bg-red-500 rounded-md text-white text-sm absolute flex items-center justify-center top-0 left-4">
              1
            </span>
          </div>
        </div>
        <Link to={`/profile/${user?.username}`}>
          <img
            className="rounded-full cursor-pointer h-11 w-11 object-cover hover:scale-110 transition-all"
            src={
              user?.profilePicture
                ? user.profilePicture
                : "http://localhost:5173/src/assets/person/noAvatar.png"
            }
            alt="avatar"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
