import { IReply } from "../../@types/comments";

import Reply from "../../assets/images/icon-reply.svg";
import Plus from "../../assets/images/icon-plus.svg";
import Minus from "../../assets/images/icon-minus.svg";
import Delete from "../../assets/images/icon-delete.svg";
import Edit from "../../assets/images/icon-edit.svg";

interface IReplies {
  reply: IReply;
}

import "./Replies.scss";

export default function Replies({ reply }: IReplies) {
  const userName = localStorage.getItem("userName");

  console.log(userName);

  return (
    <>
      <div className="container__reply">
        <article className="card">
          <div className="card__header">
            <img
              className="card__header__img"
              src={reply.user.image.png}
              alt={reply.user.username}
            />

            <span className="card__header__name">{reply.user.username}</span>
            <span className="card__header__date">{reply.createdAt}</span>
          </div>

          <div className="card__body">
            <p className="card__body__text">
              <span className="card__body__span">@{reply.replyingTo}</span>{" "}
              {reply.content}
            </p>
          </div>

          <div className="card__footer">
            <div className="card__footer__point">
              <img src={Plus} alt="" />
              <span>{reply.score}</span>
              <img src={Minus} alt="" />
            </div>

            {userName === reply.user.username ? (
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
              <div className="card__footer__reply">
                <img src={Reply} alt="" />
                <span>Reply</span>
              </div>
            )}
          </div>
        </article>
      </div>
    </>
  );
}
