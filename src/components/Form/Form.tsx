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

  // Função auxiliar para ordenar por ID em ordem crescente
  const compareById = (a: any, b: any) => a.id - b.id;

  const getCommentSelect = () => {
    const commentSelecting: IComment = JSON.parse(
      localStorage.getItem("commentSelecting") ?? ""
    );

    return commentSelecting;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let commentExist;
    let idCommentExist: number;
    let updateCommentsArray;

    try {
      idCommentExist = getCommentSelect().id;

      commentExist = comments.find((comment) => comment.id === idCommentExist);
    } catch (error) {}

    if (commentExist) {
      const newCommentReply: IReply = {
        ...comment,
        id: idComment,
        createdAt: getDate(),
        replyingTo: getCommentSelect().user.username,
        user: {
          image: {
            png: user?.image.png ?? "",
            webp: user?.image.webp ?? "",
          },
          username: user?.username ?? "",
        },
      };

      commentExist.replies.push(newCommentReply);

      updateCommentsArray = [
        ...comments.filter((c) => c.id !== idCommentExist),
        commentExist,
      ];

      updateCommentsArray.sort(compareById);

      console.log(updateCommentsArray);

      localStorage.setItem("comments", JSON.stringify(updateCommentsArray));

      if (setComments) {
        setComments(updateCommentsArray);
      }
    } else {
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

      updateCommentsArray = [...comments, newComment];

      localStorage.setItem("comments", JSON.stringify(updateCommentsArray));
    }

    setIdComment((prevId) => prevId + 1);
    setComment(initialState);

    localStorage.removeItem("commentSelecting");

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
