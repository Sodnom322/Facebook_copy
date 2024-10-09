export interface IPosts {
  createdAt: string;
  desc?: string;
  img: string;
  likes?: string[];
  updatedAt: string;
  userId: string;
  __v?: number;
  _id: string;
  username?: string;
  post: IPosts;
}

export interface IUser {
  coverPicture: string;
  profilePicture: string;
  createdAt: string;
  username: string | undefined;
  email: string;
  followers?: string[];
  desc?: string;
  city?: string;
  from?: string;
  relationship?: string;
  followings?: string[];
  isAdmin?: boolean;
  _id: string;
}

export const Users = [
  {
    id: 1,
    profilePicture: "http://localhost:5173/src/assets/person/1.jpeg",
    username: "Safak Kocaoglu",
  },
  {
    id: 2,
    profilePicture: "http://localhost:5173/src/assets/person/2.jpeg",
    username: "Janell Shrum",
  },
  {
    id: 3,
    profilePicture: "http://localhost:5173/src/assets/person/3.jpeg",
    username: "Alex Durden",
  },
  {
    id: 4,
    profilePicture: "http://localhost:5173/src/assets/person/4.jpeg",
    username: "Dora Hawks",
  },
  {
    id: 5,
    profilePicture: "http://localhost:5173/src/assets/person/5.jpeg",
    username: "Thomas Holden",
  },
  {
    id: 6,
    profilePicture: "http://localhost:5173/src/assets/person/6.jpeg",
    username: "Shirley Beauchamp",
  },
  {
    id: 7,
    profilePicture: "http://localhost:5173/src/assets/person/7.jpeg",
    username: "Travis Bennett",
  },
  {
    id: 8,
    profilePicture: "http://localhost:5173/src/assets/person/8.jpeg",
    username: "Kristen Thomas",
  },
  {
    id: 9,
    profilePicture: "http://localhost:5173/src/assets/person/9.jpeg",
    username: "Gary Duty",
  },
  {
    id: 10,
    profilePicture: "http://localhost:5173/src/assets/person/10.jpeg",
    username: "Safak Kocaoglu",
  },
];

export const Posts = [
  {
    id: 1,
    desc: "Love For All, Hatred For None.",
    photo: "src//assets/post/1 (1).jpeg",
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    photo: "src/assets/post/2.jpeg",
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning.",
    photo: "src/assets/post/3.jpeg",
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    photo: "src/assets/post/4.jpeg",
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    photo: "src/assets/post/5.jpeg",
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    photo: "src/assets/post/6.jpeg",
    date: "1 day ago",
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    desc: "Never regret anything that made you smile.",
    photo: "src/assets/post/7.jpeg",
    date: "2 days ago",
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    photo: "src/assets/post/8.jpeg",
    date: "3 days ago",
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    desc: "Change the world by being yourself.",
    photo: "src/assets/post/9.jpeg",
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    photo: "src/assets/post/10.jpeg",
    date: "1 week ago",
    userId: 10,
    like: 104,
    comment: 12,
  },
];
