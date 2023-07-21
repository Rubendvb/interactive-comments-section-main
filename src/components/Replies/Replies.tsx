import { useState } from "react";
import { IComment, IReply } from "../../@types/comments";

import Card from "../Card/Card";
import Form from "../Form/Form";

import "./Replies.scss";
import CardReply from "../CardReply/CardReply";
interface IReplies {
  reply: IReply;
  comments: IComment[];
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
}

export default function Replies({ reply, comments, setComments }: IReplies) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <CardReply reply={reply} setShowForm={setShowForm} />

      {showForm ? (
        <Form comments={comments} setComments={setComments} />
      ) : undefined}
    </>
  );
}
