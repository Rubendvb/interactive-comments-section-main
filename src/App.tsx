import { useEffect, useState } from "react";

import "/src/assets/sass/App.scss";

import * as serviceUser from "./service/CommentsService";
import { IUser } from "./@types/comments";

import Amy from "/assets/avatars/image-amyrobson.png";
import Maxblagun from "/assets/avatars/image-maxblagun.png";
import Ramsesmiron from "../public/assets/avatars/image-ramsesmiron.png";
import Reply from "./assets/images/icon-reply.svg";
import Plus from "./assets/images/icon-plus.svg";
import Minus from "./assets/images/icon-minus.svg";

export default function App() {
  // const [user, setUser] = useState<IUser>();
  // const [comments, setComments] = useState();

  // const loadUser = async () => {
  //   const res = await serviceUser.getUser();

  //   setUser(res.data);
  // };

  // const loadComments = async () => {
  //   const res = await serviceUser.getComments();

  //   console.log(res.data);
  // };

  // useEffect(() => {
  //   loadUser();
  //   loadComments();
  // }, []);

  return (
    <main className="main">
      <article className="card">
        <div className="card__header">
          <img className="card__header__img" src={Amy} alt="" />

          <span className="card__header__name">amyrobson</span>
          <span className="card__header__date">1 month ago</span>
        </div>

        <div className="card__body">
          <p className="card__body__text">
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You've nailed the design and the
            responsiveness at various breakpoints works really well.
          </p>
        </div>

        <div className="card__footer">
          <div className="card__footer__point">
            <img src={Plus} alt="" />
            <span>12</span>
            <img src={Minus} alt="" />
          </div>

          <div className="card__footer__reply">
            <img src={Reply} alt="" />
            <span>Reply</span>
          </div>
        </div>
      </article>

      <article className="card">
        <div className="card__header">
          <img className="card__header__img" src={Maxblagun} alt="" />

          <span className="card__header__name">maxblagun</span>
          <span className="card__header__date">2 weeks ago</span>
        </div>

        <div className="card__body">
          <p className="card__body__text">
            Woah, your project looks awesome! How long have you been coding for?
            I'm still new, but think I want to dive into React as well soon.
            Perhaps you can give me an insight on where I can learn React?
            Thanks!
          </p>
        </div>

        <div className="card__footer">
          <div className="card__footer__point">
            <img src={Plus} alt="" />
            <span>5</span>
            <img src={Minus} alt="" />
          </div>

          <div className="card__footer__reply">
            <img src={Reply} alt="" />
            <span>Reply</span>
          </div>
        </div>
      </article>

      <div className="container__reply">
        <article className="card">
          <div className="card__header">
            <img className="card__header__img" src={Ramsesmiron} alt="" />

            <span className="card__header__name">ramsesmiron</span>
            <span className="card__header__date">1 week ago</span>
          </div>

          <div className="card__body">
            <p className="card__body__text">
              <span className="card__body__span">@maxblagun</span> If you're
              still new, I'd recommend focusing on the fundamentals of HTML,
              CSS, and JS before considering React. It's very tempting to jump
              ahead but lay a solid foundation first.
            </p>
          </div>

          <div className="card__footer">
            <div className="card__footer__point">
              <img src={Plus} alt="" />
              <span>4</span>
              <img src={Minus} alt="" />
            </div>

            <div className="card__footer__reply">
              <img src={Reply} alt="" />
              <span>Reply</span>
            </div>
          </div>
        </article>

        <article className="card">
          <div className="card__header">
            <img className="card__header__img" src={Ramsesmiron} alt="" />

            <span className="card__header__name">ramsesmiron</span>
            <span className="card__header__date">1 week ago</span>
          </div>

          <div className="card__body">
            <p className="card__body__text">
              <span className="card__body__span">@maxblagun</span> If you're
              still new, I'd recommend focusing on the fundamentals of HTML,
              CSS, and JS before considering React. It's very tempting to jump
              ahead but lay a solid foundation first.
            </p>
          </div>

          <div className="card__footer">
            <div className="card__footer__point">
              <img src={Plus} alt="" />
              <span>4</span>
              <img src={Minus} alt="" />
            </div>

            <div className="card__footer__reply">
              <img src={Reply} alt="" />
              <span>Reply</span>
            </div>
          </div>
        </article>
      </div>

      <section className="section__addComment">
        <form className="section__addComment__form" action="">
          <textarea name="" id="" placeholder="Add a comment..."></textarea>

          <div className="section__addComment__button">
            <img src={Maxblagun} alt="" />

            <button type="submit">SEND</button>
          </div>
        </form>
      </section>
    </main>
  );
}
