import Card from "../Card/Card";
import Replies from "../Replies/Replies";

import { IComment } from "../../@types/comments";

import "./Cards.scss";

interface ICard {
  comment: IComment;
}

export default function Cards({ comment }: ICard) {
  return (
    <section className="cards">
      <Card comment={comment} />

      {comment.replies.length > 0 ? (
        <div className="container__reply">
          {comment.replies.map((reply) => (
            <Replies key={reply.id} reply={reply} />
          ))}
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
