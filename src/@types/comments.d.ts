export interface IUserImage {
  png: string;
  webp: string;
}

export interface IUser {
  image: IUserImage;
  username: string;
}

export interface IReply {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: IUser;
}

export interface IComment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: IUser;
  replies: IReply[];
}

export interface ICurrentUser {
  image: IUserImage;
  username: string;
}
