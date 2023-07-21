import ButtonReply from "../ButtonReply/ButtonReply";
import Score from "../Score/Score";
import Modal from "../Modal/Modal";

import Delete from "../../assets/images/icon-delete.svg";
import Edit from "../../assets/images/icon-edit.svg";

import data from "../../data/data.json";

import { IComment } from "../../@types/comments";

import "./Card.scss";
interface ICard {
  comment: IComment;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Card({ comment, setShowForm }: ICard) {
  const userName = data.currentUser.username;

  const commentSelecting = (element: IComment) => {
    localStorage.setItem("commentSelecting", JSON.stringify(element));
  };

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
                src={comment.user?.image?.png}
                alt={comment.user.username}
              />

              <div>
                <span className="card__header__container__name">
                  {comment.user.username}
                </span>
                {userName === comment.user.username && (
                  <span className="card__header__container__you">you</span>
                )}
              </div>

              <span className="card__header__container__date">
                {comment.createdAt}
              </span>
            </div>

            <div className="card__footer">
              {userName === comment.user.username ? (
                <div className="card__footer__buttons">
                  <div
                    className="card__footer__buttons__delete containerButtons"
                    data-bs-toggle="modal"
                    data-bs-target={`#exampleModal-${comment.id}`} // Atributo data-bs-target com o ID único do modal gerado pelo comentário
                  >
                    <img src={Delete} alt="" />
                    <span>Delete</span>
                  </div>

                  <div className="card__footer__buttons__edit containerButtons">
                    <img src={Edit} alt="" />
                    <span>Edit</span>
                  </div>
                </div>
              ) : (
                <div
                  className="card__header__reply"
                  onClick={() => commentSelecting(comment)}
                >
                  <ButtonReply setShowForm={setShowForm} />
                </div>
              )}
            </div>
          </div>
          <div className="card__body">
            <p className="card__body__text">{comment.content}</p>
          </div>
        </div>

        <div
          className="modal fade"
          id={`exampleModal-${comment.id}`} //ID único do modal gerado pelo comentário
          tabIndex={-1}
          aria-labelledby={`exampleModalLabel-${comment.id}`}
          aria-hidden="true"
        >
          <Modal comment={comment} />
        </div>
      </article>
    </>
  );
}
