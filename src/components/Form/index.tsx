import { ICurrentUser } from "../../@types/comments";

export default function Form({ image, username }: ICurrentUser) {
  return (
    <form className="containerForm">
      <div className="containerForm__textarea">
        <textarea
          className="containerForm__textarea--box"
          name="comment"
          id="comment"
          placeholder="Add a comment..."
        ></textarea>
      </div>

      <div className="containerForm__user">
        <img
          className="containerForm__user--img"
          src={image?.png}
          alt={username}
        />
        <button className="containerForm__user--btn">SEND</button>
      </div>
    </form>
  );
}
