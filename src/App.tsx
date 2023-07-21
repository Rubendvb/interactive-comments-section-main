import { useEffect, useState } from "react";

import Form from "./components/Form/Form";
import Feed from "./components/Feed/Feed";

import { IComment } from "./@types/comments";

import data from "./data/data.json";

import "/src/assets/sass/App.scss";

export default function App() {
  const [comments, setComments] = useState<IComment[]>([]);

  const loadComments = (dataComments: IComment[]) => {
    setComments(dataComments);
  };

  useEffect(() => {
    if (data.comments) {
      loadComments(data.comments);
    }
  }, []);

  return (
    <main className="main">
      <Feed comments={comments} loadComments={loadComments} />

      <Form
        comments={comments}
        setComments={setComments}
        loadComments={loadComments}
      />
    </main>
  );
}
