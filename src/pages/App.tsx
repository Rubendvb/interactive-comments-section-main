import { useEffect, useState } from "react";

import Plus from "/src/assets/images/icon-plus.svg";
import Minus from "/src/assets/images/icon-minus.svg";
import Reply from "/src/assets/images/icon-reply.svg";

import "/src/assets/sass/App.scss";

import data from "../data/data.json";

type IComments = typeof data["comments"][1];

function App() {
  const [comments, setComments] = useState<IComments[]>(data["comments"]);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  return (
    <div className="containerApp">
      {comments &&
        comments.map((comment) => {
          return (
            <div className="card" key={comment.id}>
              <div className="card__header">
                <img
                  src={comment.user.image.png}
                  alt={comment.user.username}
                  className="card__header--img"
                />
                <span className="card__header--name">
                  {comment.user.username}
                </span>
                <span className="card__header--date">{comment.createdAt}</span>
              </div>

              <div className="card__main">
                <p className="card__main--paragraph">{comment.content}</p>
              </div>

              <div className="card__footer">
                <div className="card__footer--point">
                  <img src={Plus} alt="" />
                  <span className="card__footer--point-number">
                    {comment.score}
                  </span>
                  <img src={Minus} alt="" />
                </div>

                <div className="card__footer--reply">
                  <img src={Reply} alt="" />
                  <div className="card__footer--reply-text">Reply</div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
