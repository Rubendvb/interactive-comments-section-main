import { useEffect, useState } from "react";
import { IComments } from "../../pages/App";
import { ICurrentUser } from "../../@types/comments";

import "./Card.scss";

import Plus from "/src/assets/images/icon-plus.svg";
import Minus from "/src/assets/images/icon-minus.svg";
import Reply from "/src/assets/images/icon-reply.svg";

import Answer from "../Answer";
import Form from "../Form";

import data from "../../data/data.json";

export default function Card({
  id,
  user,
  createdAt,
  content,
  score,
  replies,
}: IComments) {
  const [currentUser, setCurrentUser] = useState<ICurrentUser>();
  const [form, setForm] = useState(false);

  const loadCurrentUser = () => {
    setCurrentUser(data["currentUser"]);
  };

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    loadCurrentUser();
  }, [currentUser]);

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
          <div className="card__footer--reply" onClick={() => setForm(!form)}>
            <img src={Reply} alt="" />
            <span className="card__footer--reply-text">Reply</span>
          </div>
        </div>
      </div>

      <div className="containerReply">
        {replies.map((reply) => {
          return <Answer key={reply.id} {...reply} />;
        })}
      </div>

      {form && <Form {...currentUser} />}
    </div>
  );
}
