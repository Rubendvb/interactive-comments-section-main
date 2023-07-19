import { useEffect, useState } from "react";

import Form from "./components/Form/Form";
import Feed from "./components/Feed/Feed";

import { IComment } from "./@types/comments";

import * as serviceUser from "./service/CommentsService";

import "/src/assets/sass/App.scss";

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
      <Feed comments={comments} loadComments={loadComments} />

      <Form loadComments={loadComments} />
    </main>
  );
}
