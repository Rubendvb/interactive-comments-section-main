import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { IComment, IReply, IUser } from "../../@types/comments";

import data from "../../data/data.json";

interface IForm extends IFeed {
  showForm?: boolean;
  userReply?: IReply | IComment;
}

import "./Form.scss";
import { IFeed } from "../Feed/Feed";

export default function Form({ showForm, comments, setComments }: IForm) {
  const [idComment, setIdComment] = useState(5);

  const user: IUser = data.currentUser;

  const initialState: IComment = {
    id: 0,
    content: "",
    createdAt: "",
    score: 0,
    user: {
      image: {
        png: user?.image.png ?? "",
        webp: user?.image.webp ?? "",
      },
      username: user?.username ?? "",
    },
    replies: [],
  };

  const [comment, setComment] = useState<IComment>(initialState);

  const getDate = () => {
    const today = new Date().toLocaleString();

    return today;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const existingComments = comments ?? [];

    const newComment = {
      ...comment,
      id: idComment,
      createdAt: getDate(),
      user: {
        image: {
          png: user?.image.png ?? "",
          webp: user?.image.webp ?? "",
        },
        username: user?.username ?? "",
      },
    };

    const updateCommentsArray = [...existingComments, newComment];

    localStorage.setItem("comments", JSON.stringify(updateCommentsArray));

    setIdComment((prevId) => prevId + 1);
    setComment(initialState);

    if (setComments) {
      setComments(updateCommentsArray);
    }
  };

  return (
    <>
      <section className="section__addComment">
        <form
          className="section__addComment__form"
          onSubmit={handleSubmit}
          method="POST"
        >
          <textarea
            placeholder="Add a comment..."
            name="content"
            onChange={handleInputChange}
            value={comment.content}
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
