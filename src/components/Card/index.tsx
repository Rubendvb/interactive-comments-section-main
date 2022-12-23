import Answer from "../Answer";

import { IComments } from "../../pages/App";

import Plus from "/src/assets/images/icon-plus.svg";
import Minus from "/src/assets/images/icon-minus.svg";
import Reply from "/src/assets/images/icon-reply.svg";

export default function Card({
  id,
  user,
  createdAt,
  content,
  score,
  replies,
}: IComments) {
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
          <div className="card__footer--reply">
            <img src={Reply} alt="" />
            <div className="card__footer--reply-text">Reply</div>
          </div>
        </div>
      </div>

      <div className="containerReply">
        {replies.map((reply) => {
          return <Answer key={reply.id} {...reply} />;
        })}
      </div>
    </div>
  );
}
