import { useEffect, useState } from "react";

import "/src/assets/sass/App.scss";

import * as serviceUser from "./service/CommentsService";

import { IComment } from "./@types/comments";
import Cards from "./components/Cards/Cards";
import Form from "./components/Form/Form";

export default function App() {
  const [comments, setComments] = useState<IComment[]>([]);

  const loadComments = async () => {
    const res = await serviceUser.getComments();

    setComments(res.data);
  };

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <main className="main">
      {comments &&
        comments.map((comment) => {
          return <Cards key={comment.id} comment={comment} />;
        })}

      <Form />
    </main>
  );
}
