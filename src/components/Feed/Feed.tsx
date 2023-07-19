import { IComment } from "../../@types/comments";
import Cards from "../Cards/Cards";

interface IFeed {
  comments: IComment[];
  loadComments: () => Promise<void>;
}

export default function Feed({ comments, loadComments }: IFeed) {
  return (
    <>
      {comments &&
        comments.map((comment) => {
          return (
            <Cards
              key={comment.id}
              comment={comment}
              loadComments={loadComments}
            />
          );
        })}
    </>
  );
}
