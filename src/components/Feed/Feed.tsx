import { useEffect } from "react";
import { IComment } from "../../@types/comments";
import Cards from "../Cards/Cards";

export interface IFeed {
  comments?: IComment[];
  setComments?: React.Dispatch<React.SetStateAction<IComment[]>>;
}

export default function Feed({ comments, setComments }: IFeed) {
  useEffect(() => {
    const commentsData = localStorage.getItem("comments");

    if (commentsData && setComments) {
      const parsedComments: IComment[] = JSON.parse(commentsData);

      setComments(parsedComments);
    }
  }, []);

  return (
    <>
      {comments &&
        comments.map((comment) => {
          return <Cards key={comment.id} comment={comment} />;
        })}
    </>
  );
}
