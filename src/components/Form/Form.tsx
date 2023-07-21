import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { IComment, IUser } from "../../@types/comments";

import data from "../../data/data.json";

interface IForm {
  showForm?: boolean;
  userReply?: IComment;
  comments: IComment[];
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
  loadComments: (dataComments: IComment[]) => void;
}

import "./Form.scss";

export default function Form({
  showForm,
  userReply,
  comments,
  setComments,
  loadComments,
}: IForm) {
  const [user, setUser] = useState<IUser>();
  const [idComment, setIdComment] = useState(5);
  const loadUser = () => {
    setUser(data.currentUser);
  };

  const initialState: IComment = {
    id: idComment,
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
  ) => {};

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    loadUser();
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
            value={}
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
