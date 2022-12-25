import { FormEvent, useEffect, useState } from "react";
import { ICard, IComment, IUser } from "../../@types/comments";

import "./Form.scss";

import data from "../../data/data.json";

interface Props extends ICard {
  form: boolean;
}

export default function Form({ form, getUser, setGetUser }: Props) {
  const [currentUser, setCurrentUser] = useState<IUser>();
  const [content, setContent] = useState("");
  const [count, setCount] = useState(5);

  function loadUser() {
    const initialStore = localStorage.getItem("userId") || "";

    const getUser: IComment =
      initialStore !== undefined ? JSON.parse(initialStore) : [];

    if (getUser) {
      setGetUser(getUser);
    }

    // localStorage.setItem("userSetReplies", JSON.stringify(user));
  }

  const loadCurrentUser = () => {
    setCurrentUser(data["currentUser"]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const item = {
      id: count,
      content: `${content}`,
      createdAt: "1 week ago",
      score: 0,
      replyingTo: `${getUser?.user.username}`,
      user: {
        image: {
          png: `${currentUser?.image?.png}`,
          webp: `${currentUser?.image?.webp}`,
        },
        username: `${currentUser?.username}`,
      },
    };

    getUser?.replies?.push(item);

    localStorage.setItem("userSetReplies", JSON.stringify(getUser));

    setCount(count + 1);
    setContent("");
  };

  useEffect(() => {
    loadCurrentUser();
    loadUser();

    if (form) {
      loadUser();
    }
  }, [form]);

  // console.log(getUser);

  return (
    <form className="containerForm" onSubmit={handleSubmit}>
      <div className="containerForm__textarea">
        <textarea
          className="containerForm__textarea--box"
          placeholder="Add a comment..."
          name="comment"
          id="comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>

      <div className="containerForm__user">
        <img
          className="containerForm__user--img"
          src={currentUser?.image?.png}
          alt={currentUser?.username}
        />
        <button className="containerForm__user--btn">SEND</button>
      </div>
    </form>
  );
}
