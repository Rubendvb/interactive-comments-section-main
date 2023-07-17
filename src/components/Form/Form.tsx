import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { IComment, IUser } from "../../@types/comments";

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

  const initialState = {
    content: "",
    createdAt: "",
    score: 0,
    user: {
      image: {
        png: user?.image?.png,
      },
      username: user?.username,
    },
    replies: [],
  };

  const getDate = () => {
    const today = new Date().toLocaleString();

    return today;
  };

  const [comment, setComment] = useState<IComment>(initialState);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await serviceUser.createComment({
      ...comment,
      createdAt: getDate(),
      user: {
        image: {
          png: user?.image?.png,
        },
        username: user?.username,
      },
    });
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
        <form
          className="section__addComment__form"
          onSubmit={handleSubmit}
          method="POST"
        >
          <textarea
            name="content"
            onChange={handleInputChange}
            placeholder="Add a comment..."
            defaultValue={userReply ? `@${userReply} ` : undefined}
            required
          ></textarea>

          <div className="section__addComment__button">
            <img src={user?.image?.png} alt="" />

            <button type="submit">{showForm ? "REPLY" : "SEND"}</button>
          </div>
        </form>
      </section>
    </>
  );
}
