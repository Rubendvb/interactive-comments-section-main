import { useEffect, useState } from "react";
import { ICurrentUser } from "../../@types/comments";

import "./Form.scss";

import data from "../../data/data.json";

export default function Form() {
  const [currentUser, setCurrentUser] = useState<ICurrentUser>();

  const loadCurrentUser = () => {
    setCurrentUser(data["currentUser"]);
  };

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    loadCurrentUser();
  }, [currentUser]);

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
          src={currentUser?.image?.png}
          alt={currentUser?.username}
        />
        <button className="containerForm__user--btn">SEND</button>
      </div>
    </form>
  );
}
