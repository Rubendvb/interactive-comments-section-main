import { useState } from "react";

import Plus from "../../assets/images/icon-plus.svg";
import Minus from "../../assets/images/icon-minus.svg";

import "./Score.scss";

interface IScore {
  score: number;
}

export default function Score({ score }: IScore) {
  const [point, setPoint] = useState(score);

  const countPoint = (score: number) => {
    setPoint(score);
  };

  return (
    <>
      <img
        className="img__score"
        src={Plus}
        alt=""
        onClick={() => countPoint(point + 1)}
      />
      <span className="text__score">{point}</span>
      <img
        className="img__score"
        src={Minus}
        alt=""
        onClick={() => countPoint(point - 1)}
      />
    </>
  );
}
