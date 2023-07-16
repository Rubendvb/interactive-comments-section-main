import { IComment } from "../../@types/comments";
import Card from "../Card/Card";
import Replies from "../Replies/Replies";

interface ICard {
  comment: IComment;
}

export default function Cards({ comment }: ICard) {
  return (
    <>
      <Card comment={comment} />

      {comment.replies.length > 0 &&
        comment.replies.map((reply) => (
          <Replies key={reply.id} reply={reply} />
        ))}
    </>
  );
}
