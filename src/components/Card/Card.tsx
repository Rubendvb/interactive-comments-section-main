import ButtonReply from "../ButtonReply/ButtonReply";
import Score from "../Score/Score";

import Delete from "../../assets/images/icon-delete.svg";
import Edit from "../../assets/images/icon-edit.svg";

import { IComment } from "../../@types/comments";

import "./Card.scss";
interface ICard {
  comment: IComment;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Card({ comment, setShowForm }: ICard) {
  const userName = localStorage.getItem("userName");
  return (
    <>
      <article className="card">
        <div className="card__point">
          <Score score={comment.score} />
        </div>

        <div>
          <div className="card__header">
            <div className="card__header__container">
              <img
                className="card__header__container__img"
                src={comment.user.image.png}
                alt={comment.user.username}
              />
              <span className="card__header__container__name">
                {comment.user.username}
              </span>

              {userName === comment.user.username && (
                <span className="card__header__container__you">you</span>
              )}

              <span className="card__header__container__date">
                {comment.createdAt}
              </span>
            </div>
          </div>
          <div className="card__body">
            <p className="card__body__text">{comment.content}</p>
          </div>
        </div>

        <div className="card__footer">
          {userName === comment.user.username ? (
            <div className="card__footer__buttons">
              <div className="card__footer__buttons__delete containerButtons">
                <img src={Delete} alt="" />
                <span>Delete</span>
              </div>

              <div className="card__footer__buttons__edit containerButtons">
                <img src={Edit} alt="" />
                <span>Edit</span>
              </div>
            </div>
          ) : (
            <div className="card__header__reply">
              <ButtonReply setShowForm={setShowForm} />
            </div>
          )}
        </div>
      </article>
    </>
  );
}
