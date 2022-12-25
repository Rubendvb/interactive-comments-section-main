export interface AnswerProps {
  setGetId: React.Dispatch<React.SetStateAction<number>>;
  getId: number;
}

export interface IComment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: IUser;
  replies?: IComment[];
  replyingTo?: string;
}

interface IUser {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface ICard {
  getUser: IComment | undefined;
  setGetUser: React.Dispatch<React.SetStateAction<IComment | undefined>>;
}
