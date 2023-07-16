import { useEffect, useState } from "react";

import "/src/assets/sass/App.scss";

import * as serviceUser from "./service/CommentsService";
import { IUser } from "./@types/comments";

import { IComment } from "./@types/comments";
import Cards from "./components/Cards/Cards";

export default function App() {
  const [user, setUser] = useState<IUser>();
  const [comments, setComments] = useState<IComment[]>([]);

  const loadUser = async () => {
    const res = await serviceUser.getUser();

    setUser(res.data);
  };

  const loadComments = async () => {
    const res = await serviceUser.getComments();

    setComments(res.data);
  };

  useEffect(() => {
    loadUser();
    loadComments();

    if (user?.username) {
      localStorage.setItem("userName", user.username);
    }
  }, []);

  return (
    <main className="main">
      {comments &&
        comments.map((comment) => {
          return <Cards key={comment.id} comment={comment} />;
        })}

      <section className="section__addComment">
        <form className="section__addComment__form" action="">
          <textarea name="" id="" placeholder="Add a comment..."></textarea>

          <div className="section__addComment__button">
            <img src={user?.image.png} alt="" />

            <button type="submit">SEND</button>
          </div>
        </form>
      </section>
    </main>
  );
}
