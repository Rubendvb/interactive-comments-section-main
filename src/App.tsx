import { useEffect, useState } from "react";

import "/src/assets/sass/App.scss";

import * as serviceUser from "./service/CommentsService";
import { IUser } from "./@types/comments";

import { IComment } from "./@types/comments";
import Cards from "./components/Cards/Cards";
import Form from "./components/Form/Form";

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

      <Form user={user} />
    </main>
  );
}
