import axios from "axios";
import { USER_API } from "./constant";

export const fetchUser = async () => {
  try {
    const res = await axios.get(USER_API);
    return res.data.user[0];
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};