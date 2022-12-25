import { useEffect, useState } from "react";

import "./App.scss";

import data from "../data/data.json";
import Card from "../components/Card";
import { IComment } from "../@types/comments";

function App() {
  const [comments, setComments] = useState<IComment[]>([]);
  const [getId, setGetId] = useState(Number);
  const [getUser, setGetUser] = useState<IComment>();

  const userId = comments.find((comment) => comment.id === getId);

  const loadComments = () => {
    setComments(data["comments"]);
  };

  function loadUser() {
    // const equalID = comments.filter((comment) => comment.id === getUser?.id);
    // comments.push(...comments);
  }

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
    localStorage.setItem("userId", JSON.stringify(userId || []));

    loadComments();
    loadUser();
  }, [comments, userId, loadUser]);

  return (
    <div className="containerApp">
      {comments &&
        comments.map((comment) => {
          return (
            <Card
              key={comment.id}
              {...comment}
              getId={getId}
              setGetId={setGetId}
              getUser={getUser}
              setGetUser={setGetUser}
            />
          );
        })}
    </div>
  );
}

export default App;
