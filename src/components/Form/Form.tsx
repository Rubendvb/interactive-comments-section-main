import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { IComment, IUser } from "../../@types/comments";

import * as serviceUser from "../../service/CommentsService";
interface IForm {
  showForm?: boolean;
  userReply?: IComment;
  loadComments: () => Promise<void>;
}

import "./Form.scss";

export default function Form({ showForm, userReply, loadComments }: IForm) {
  const [user, setUser] = useState<IUser>();
  const [comment, setComment] = useState<IComment>({
    id: userReply?.id ? userReply?.id + 1 : 0,
    content: `${userReply ? `@${userReply.user.username}, ` : ""}`,
    createdAt: "",
    score: 0,
    user: {
      image: {
        png: user?.image?.png || "",
      },
      username: user?.username,
    },
    replies: [],
  });

  const loadUser = async () => {
    const res = await serviceUser.getUser();

    setUser(res.data);
  };

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

    if (userReply?.replies) {
      const updateComment = {
        ...userReply,
        replies: [
          ...userReply.replies,
          {
            id: userReply.id + 1,
            content: comment.content,
            score: 0,
            replyingTo: userReply.user.username,
            createdAt: getDate(),
            user: {
              image: {
                png: user?.image?.png || "",
              },
              username: user?.username,
            },
          },
        ],
      };

      await serviceUser.updateComment(userReply.id ?? 0, updateComment);
    } else {
      await serviceUser.createComment({
        ...comment,
        createdAt: getDate(),
        user: {
          image: {
            png: user?.image?.png || "",
          },
          username: user?.username,
        },
      });
    }

    setComment({ ...comment, content: "" });

    loadComments();
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
