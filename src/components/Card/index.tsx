import { useState } from "react";

import "./Card.scss";

import Plus from "/src/assets/images/icon-plus.svg";
import Minus from "/src/assets/images/icon-minus.svg";
import Reply from "/src/assets/images/icon-reply.svg";

import Answer from "../Answer";
import Form from "../Form";
import { AnswerProps, ICard, IComment } from "../../@types/comments";

interface Props extends AnswerProps, IComment, ICard {}

export default function Card({
  id,
  user,
  createdAt,
  content,
  score,
  replies,
  getId,
  setGetId,
  getUser,
  setGetUser,
}: Props) {
  const [form, setForm] = useState(false);

  function getInfo(form: boolean, id: number) {
    setForm(form);

    if (id !== getId) {
      setGetId(id);
    }
  }

  return (
    <div key={id}>
      <div className="card">
        <div className="card__header">
          <img
            src={user.image.png}
            alt={user.username}
            className="card__header--img"
          />
          <span className="card__header--name">{user.username}</span>
          <span className="card__header--date">{createdAt}</span>
        </div>
        <div className="card__main">
          <p className="card__main--paragraph">{content}</p>
        </div>
        <div className="card__footer">
          <div className="card__footer--point">
            <img src={Plus} alt="" />
            <span className="card__footer--point-number">{score}</span>
            <img src={Minus} alt="" />
          </div>
          <div
            className="card__footer--reply"
            onClick={() => getInfo(!form, id)}
          >
            <img src={Reply} alt="" />
            <span className="card__footer--reply-text">Reply</span>
          </div>
        </div>
      </div>

      <div className="containerReply">
        {replies?.map((reply) => {
          return (
            <Answer
              key={reply.id}
              {...reply}
              setGetId={setGetId}
              getId={getId}
              getUser={getUser}
              setGetUser={setGetUser}
            />
          );
        })}
      </div>

      {form && <Form form={form} getUser={getUser} setGetUser={setGetUser} />}
    </div>
  );
}
