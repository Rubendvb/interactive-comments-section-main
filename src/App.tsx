import Form from "./components/Form/Form";
import Feed from "./components/Feed/Feed";

import data from "./data/data.json";

import "/src/assets/sass/App.scss";
import { useState } from "react";
import { IComment } from "./@types/comments";

export default function App() {
  const [comments, setComments] = useState<IComment[]>(data.comments);

  return (
    <main className="main">
      <Feed comments={comments} setComments={setComments} />

      <Form comments={comments} setComments={setComments} />
    </main>
  );
}
