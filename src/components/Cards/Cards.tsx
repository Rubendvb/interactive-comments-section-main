import { useState } from "react";

import Card from "../Card/Card";
import Form from "../Form/Form";
import Replies from "../Replies/Replies";

import { IComment } from "../../@types/comments";

import "./Cards.scss";

interface ICard {
  comment: IComment;
  comments: IComment[];
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
}

export default function Cards({ comment, comments, setComments }: ICard) {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="cards">
      <Card comment={comment} setShowForm={setShowForm} />

      {showForm ? (
        <Form
          showForm={showForm}
          comments={comments}
          setComments={setComments}
        />
      ) : undefined}

      {comment.replies && comment.replies.length > 0 ? (
        <div className="container__reply" key={comment.replies.length}>
          {comment.replies.map((reply) => (
            <Replies
              key={reply.id}
              reply={reply}
              comments={comments}
              setComments={setComments}
            />
          ))}
        </div>
      ) : undefined}
    </section>
  );
}
