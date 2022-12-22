import Amy from "./assets/images/avatars/image-amyrobson.png";
import Plus from "./assets/images/icon-plus.svg";
import Minus from "./assets/images/icon-minus.svg";
import Reply from "./assets/images/icon-reply.svg";

import "./assets/sass/App.scss";

function App() {
  return (
    <div>
      <div className="card">
        <div className="card__header">
          <img src={Amy} alt="" className="card__header--img" />
          <span className="card__header--name">amyrobson</span>
          <span className="card__header--date">1 month ago</span>
        </div>

        <div className="card__main">
          <p className="card__main--paragraph">
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You've nailed the design and the
            responsiveness at various breakpoints works really well.
          </p>
        </div>

        <div className="card__footer">
          <div className="card__footer--point">
            <img src={Plus} alt="" />
            <span className="card__footer--point-number">12</span>
            <img src={Minus} alt="" />
          </div>

          <div className="card__footer--reply">
            <img src={Reply} alt="" />
            <div className="card__footer--reply-text">Reply</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
