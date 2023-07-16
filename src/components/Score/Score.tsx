import { useState } from "react";

import Plus from "../../assets/images/icon-plus.svg";
import Minus from "../../assets/images/icon-minus.svg";

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
      <img src={Plus} alt="" onClick={() => countPoint(point + 1)} />
      <span>{point}</span>
      <img src={Minus} alt="" onClick={() => countPoint(point - 1)} />
    </>
  );
}
