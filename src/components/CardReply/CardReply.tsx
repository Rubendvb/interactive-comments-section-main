import { IReply } from "../../@types/comments";
import data from "../../data/data.json";
import Score from "../Score/Score";

import Delete from "../../assets/images/icon-delete.svg";
import Edit from "../../assets/images/icon-edit.svg";
import ButtonReply from "../ButtonReply/ButtonReply";
import Modal from "../Modal/Modal";

interface ICardReply {
  reply: IReply;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CardReply({ reply, setShowForm }: ICardReply) {
  const userName = data.currentUser.username;

  const commentSelecting = (element: IReply) => {
    localStorage.setItem("commentSelecting", JSON.stringify(element));
  };

  return (
    <div>
      <article className="card">
        <div className="card__point">
          <Score score={reply.score} />
        </div>

        <div>
          <div className="card__header">
            <div className="card__header__container">
              <img
                className="card__header__container__img"
                src={reply.user?.image?.png}
                alt={reply.user.username}
              />

              <div>
                <span className="card__header__container__name">
                  {reply.user.username}
                </span>
                {userName === reply.user.username && (
                  <span className="card__header__container__you">you</span>
                )}
              </div>

              <span className="card__header__container__date">
                {reply.createdAt}
              </span>
            </div>

            <div className="card__footer">
              {userName === reply.user.username ? (
                <div className="card__footer__buttons">
                  <div
                    className="card__footer__buttons__delete containerButtons"
                    data-bs-toggle="modal"
                    data-bs-target={`#exampleModal-${reply.id}`} // Atributo data-bs-target com o ID único do modal gerado pelo comentário
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
                  onClick={() => commentSelecting(reply)}
                >
                  <ButtonReply setShowForm={setShowForm} />
                </div>
              )}
            </div>
          </div>
          <div className="card__body">
            <p className="card__body__text">
              <span className="card__body__text__span">{`@${reply.replyingTo}`}</span>{" "}
              {reply.content}
            </p>
          </div>
        </div>

        <div
          className="modal fade"
          id={`exampleModal-${reply.id}`} //ID único do modal gerado pelo comentário
          tabIndex={-1}
          aria-labelledby={`exampleModalLabel-${reply.id}`}
          aria-hidden="true"
        >
          <Modal reply={reply} />
        </div>
      </article>
    </div>
  );
}
