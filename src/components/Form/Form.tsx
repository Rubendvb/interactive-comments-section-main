import { useEffect, useState } from "react";

import { IUser } from "../../@types/comments";

import * as serviceUser from "../../service/CommentsService";

interface IForm {
  showForm?: boolean;
  userReply?: string;
}

import "./Form.scss";

export default function Form({ showForm, userReply }: IForm) {
  const [user, setUser] = useState<IUser>();

  const loadUser = async () => {
    const res = await serviceUser.getUser();

    setUser(res.data);
  };

  useEffect(() => {
    loadUser();

    if (user?.username) {
      localStorage.setItem("userName", user.username);
    }
  }, []);

  return (
    <>
      <section className="section__addComment">
        <form className="section__addComment__form" action="">
          <textarea
            name=""
            id=""
            placeholder="Add a comment..."
            defaultValue={userReply ? `@${userReply} ` : undefined}
          ></textarea>

          <div className="section__addComment__button">
            <img src={user?.image.png} alt="" />

            <button type="submit">{showForm ? "REPLY" : "SEND"}</button>
          </div>
        </form>
      </section>
    </>
  );
}
