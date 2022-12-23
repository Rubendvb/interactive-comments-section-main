import Plus from "/src/assets/images/icon-plus.svg";
import Minus from "/src/assets/images/icon-minus.svg";
import Reply from "/src/assets/images/icon-reply.svg";

import { IReply } from "../../@types/comments";

export default function Answer({
  id,
  user,
  createdAt,
  content,
  score,
  replyingTo,
}: IReply) {
  return (
    <div className="card" key={id}>
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
        <p className="card__main--paragraph">
          <span className="card__main--paragraph-replyinTo">@{replyingTo}</span>{" "}
          {content}
        </p>
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
  );
}
