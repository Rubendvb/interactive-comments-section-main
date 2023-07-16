import Reply from "../../assets/images/icon-reply.svg";
import Plus from "../../assets/images/icon-plus.svg";
import Minus from "../../assets/images/icon-minus.svg";

import { IComment } from "../../@types/comments";

import "./Card.scss";

interface ICard {
  comment: IComment;
}

export default function Card({ comment }: ICard) {
  return (
    <>
      <article className="card">
        <div className="card__header">
          <img
            className="card__header__img"
            src={comment.user.image.png}
            alt={comment.user.username}
          />
          <span className="card__header__name">{comment.user.username}</span>
          <span className="card__header__date">{comment.createdAt}</span>
        </div>
        <div className="card__body">
          <p className="card__body__text">{comment.content}</p>
        </div>
        <div className="card__footer">
          <div className="card__footer__point">
            <img src={Plus} alt="" />
            <span>{comment.score}</span>
            <img src={Minus} alt="" />
          </div>
          <div className="card__footer__reply">
            <img src={Reply} alt="" />
            <span>Reply</span>
          </div>
        </div>
      </article>
    </>
  );
}
