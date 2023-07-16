import axios from "axios";
import { IComment, IUser } from "../@types/comments";

const API = "http://localhost:3000";

export const getUser = async () => {
  return await axios.get<IUser>(`${API}/currentUser`);
};

export const getComments = async () => {
  return await axios.get<IComment>(`${API}/comments`);
};
