import ButtonReply from "../ButtonReply/ButtonReply";
import Score from "../Score/Score";

import { IComment } from "../../@types/comments";

import "./Card.scss";
interface ICard {
  comment: IComment;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Card({ comment, setShowForm }: ICard) {
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
            <Score score={comment.score} />
          </div>
          <ButtonReply setShowForm={setShowForm} />
        </div>
      </article>
    </>
  );
}
