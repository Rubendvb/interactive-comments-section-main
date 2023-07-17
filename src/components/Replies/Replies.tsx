import { useState } from "react";

import Card from "../Card/Card";
import Form from "../Form/Form";

import { IReply } from "../../@types/comments";

import "./Replies.scss";
interface IReplies {
  reply: IReply;
}

export default function Replies({ reply }: IReplies) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Card comment={reply} setShowForm={setShowForm} />

      {showForm ? <Form userReply={reply.user.username} /> : undefined}
    </>
  );
}
