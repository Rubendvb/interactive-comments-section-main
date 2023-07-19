import { useState } from "react";

import Card from "../Card/Card";
import Form from "../Form/Form";

import { IReply } from "../../@types/comments";

import "./Replies.scss";
interface IReplies {
  reply: IReply;
  loadComments: () => Promise<void>;
}

export default function Replies({ reply, loadComments }: IReplies) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Card
        comment={reply}
        setShowForm={setShowForm}
        loadComments={loadComments}
      />

      {showForm ? (
        <Form userReply={reply.user.username} loadComments={loadComments} />
      ) : undefined}
    </>
  );
}
