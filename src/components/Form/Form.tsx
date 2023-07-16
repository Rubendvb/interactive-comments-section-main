import { IUser } from "../../@types/comments";

import "./Form.scss";

interface IForm {
  user: IUser | undefined;
}

export default function Form({ user }: IForm) {
  return (
    <div>
      <section className="section__addComment">
        <form className="section__addComment__form" action="">
          <textarea name="" id="" placeholder="Add a comment..."></textarea>

          <div className="section__addComment__button">
            <img src={user?.image.png} alt="" />

            <button type="submit">SEND</button>
          </div>
        </form>
      </section>
    </div>
  );
}
