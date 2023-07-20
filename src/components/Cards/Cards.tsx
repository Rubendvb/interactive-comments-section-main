import { useState } from "react";

import Card from "../Card/Card";
import Form from "../Form/Form";
import Replies from "../Replies/Replies";

import { IComment } from "../../@types/comments";

import "./Cards.scss";

interface ICard {
  comment: IComment;
  loadComments: () => Promise<void>;
}

export default function Cards({ comment, loadComments }: ICard) {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="cards">
      <Card
        comment={comment}
        setShowForm={setShowForm}
        loadComments={loadComments}
      />

      {showForm ? (
        <Form
          showForm={showForm}
          userReply={comment}
          loadComments={loadComments}
        />
      ) : undefined}

      {comment.replies && comment.replies.length > 0 ? (
        <div className="container__reply" key={comment.replies.length}>
          {comment.replies.map((reply) => (
            <Replies key={reply.id} reply={reply} loadComments={loadComments} />
          ))}
        </div>
      ) : undefined}
    </section>
  );
}
