import { IComment, IReply } from "../../@types/comments";
import "./Modal.scss";

interface IModal {
  comment?: IComment;
  reply?: IReply;
}

export default function Modal({ comment }: IModal) {
  const commentDelete = async (id: number) => {
    if (id) {
      // await serviceComment.deleteComment(id);
    }

    // loadComments();
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
            onClick={() => commentDelete(comment?.id || 0)}
            data-bs-dismiss="modal"
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
