import { useEffect, useState } from "react";

import "./App.scss";

import data from "../data/data.json";
import Card from "../components/Card";

export type IComments = typeof data["comments"][1];

function App() {
  const [comments, setComments] = useState<IComments[]>([]);

  const loadComments = () => {
    setComments(data["comments"]);
  };

  // const item = comments[0];

  // const comment1 = {
  //   id: 5,
  //   content:
  //     "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
  //   createdAt: "1 week ago",
  //   score: 4,
  //   replyingTo: "maxblagun",
  //   user: {
  //     image: {
  //       png: "assets/avatars/image-ramsesmiron.png",
  //       webp: "assets/avatars/image-ramsesmiron.webp",
  //     },
  //     username: "ramsesmiron",
  //   },
  // };

  // item.replies.push(comment1);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));

    loadComments();
  }, [comments]);

  return (
    <div className="containerApp">
      {comments &&
        comments.map((comment) => {
          return <Card key={comment.id} {...comment} />;
        })}
    </div>
  );
}

export default App;
