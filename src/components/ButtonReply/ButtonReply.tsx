import Reply from "../../assets/images/icon-reply.svg";

interface IButtonReply {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ButtonReply({ setShowForm }: IButtonReply) {
  return (
    <div className="card__footer__reply" onClick={() => setShowForm(true)}>
      <img src={Reply} alt="" />
      <span>Reply</span>
    </div>
  );
}
