import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import { Users } from "..";
import CloseFriends from "./CloseFriends";

const SideBar = () => {
  return (
    <aside className="w-1/4 h-[calc(100vh-3.125rem)] overflow-hidden hover:overflow-auto sticky top-1">
      <div className="p-5 ">
        <ul className=" flex flex-col gap-5 m-0 p-0 list-none mb-5">
          <li className="flex items-center ">
            <RssFeed className="mr-3" />
            <span>Feed</span>
          </li>
          <li className="flex items-center ">
            <Chat className="mr-3" />
            <span>Feed</span>
          </li>
          <li className="flex items-center ">
            <PlayCircleFilledOutlined className="mr-3" />
            <span>Feed</span>
          </li>
          <li className="flex items-center ">
            <Group className="mr-3" />
            <span>Feed</span>
          </li>
          <li className="flex items-center ">
            <Bookmark className="mr-3" />
            <span>Feed</span>
          </li>
          <li className="flex items-center ">
            <HelpOutline className="mr-3" />
            <span>Feed</span>
          </li>
          <li className="flex items-center ">
            <WorkOutline className="mr-3" />
            <span>Feed</span>
          </li>
          <li className="flex items-center ">
            <Event className="mr-3" />
            <span>Feed</span>
          </li>
          <li className="flex items-center ">
            <School className="mr-3" />
            <span>Feed</span>
          </li>
        </ul>
        <button className="w-36 border-none p-2 rounded-md font-medium bg-blue-300 hover:bg-blue-400">
          Show more
        </button>
        <hr className="mx-0 my-5" />
        <ul className="p-0 m-0 list-none ">
          {Users.map((user) => (
            <CloseFriends key={user.id} {...user} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
