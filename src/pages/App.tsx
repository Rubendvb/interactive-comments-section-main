import { useEffect, useState } from "react";
import { ICurrentUser } from "../@types/comments";

import "/src/assets/sass/App.scss";

import data from "../data/data.json";
import Card from "../components/Card";
import Form from "../components/Form";

export type IComments = typeof data["comments"][1];

function App() {
  const [comments, setComments] = useState<IComments[]>([]);
  const [currentUser, setCurrentUser] = useState<ICurrentUser>();

  const loadComments = () => {
    setComments(data["comments"]);
    setCurrentUser(data["currentUser"]);
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
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    loadComments();
  }, []);

  return (
    <div className="containerApp">
      {comments &&
        comments.map((comment) => {
          return <Card key={comment.id} {...comment} />;
        })}

      <Form {...currentUser} />
    </div>
  );
}

export default App;
