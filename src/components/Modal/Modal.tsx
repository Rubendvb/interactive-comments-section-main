import { IComment, IReply } from "../../@types/comments";

import "./Modal.scss";

interface IModal {
  commentId?: number;
  reply?: IReply;
}

export default function Modal({ reply, commentId }: IModal) {
  const commentsFromLocalStore = localStorage.getItem("comments");

  const comments: IComment[] = commentsFromLocalStore
    ? JSON.parse(commentsFromLocalStore)
    : [];

  const commentDelete = async () => {
    let commentExist;

    const encontrarPosicaoPorId = (comentarioPorId: any) => (comentario: any) =>
      comentario.id === comentarioPorId;

    if (reply !== undefined) {
      let commentExistArray = comments.map((c) =>
        c.replies.find((r) => r.id === reply?.id)
      );

      for (let i = 0; i < commentExistArray.length; i++) {
        const element = commentExistArray[i];

        if (element !== undefined) {
          commentExist = element;
        }
      }
    } else {
      commentExist = comments.find((c) => c.id === commentId);
    }

    commentExist = comments.findIndex(encontrarPosicaoPorId(commentId));

    comments.splice(commentExist, 1);

    if (commentExist === -1) {
      commentExist = comments.map((c) =>
        c.replies.findIndex(encontrarPosicaoPorId(reply?.id))
      );

      commentExist = commentExist[0];

      comments.find((c) => c.id === reply?.id)?.replies.splice(commentExist, 1);
    }

    localStorage.setItem("comments", JSON.stringify(comments));

    console.log(commentExist);
  };

  return (
    <div className="modal-dialog modal-dialog-centered modal__container">
      <div className="modal-content modal__container__div">
        <h1 className="modal__container__div__title">Delete comment</h1>
        <div className="modal__container__div__text">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone
        </div>
        <div className="modal__container__div__buttons">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            NO, CANCEL
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => commentDelete()}
            data-bs-dismiss="modal"
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
