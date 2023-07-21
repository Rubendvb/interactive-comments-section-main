import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { IComment, IReply, IUser } from "../../@types/comments";

import data from "../../data/data.json";

interface IForm {
  showForm?: boolean;
  comments: IComment[];
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
}

import "./Form.scss";

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

    // if (userReply) {
    //   const newCommentReply: IReply = {
    //     ...comment,
    //     replyingTo: userReply.user.username,
    //     id: idComment,
    //     createdAt: getDate(),

    //     user: {
    //       image: {
    //         png: user?.image.png ?? "",
    //         webp: user?.image.webp ?? "",
    //       },
    //       username: user?.username ?? "",
    //     },
    //   };

    //   userReply.replies.push(newCommentReply);

    //   const updateCommentsArray = [...existingComments, userReply];
    //   console.log("aqui", updateCommentsArray);
    // } else {
    // }

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

  useEffect(() => {}, [setComments]);

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
