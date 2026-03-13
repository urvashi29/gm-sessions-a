import axios from "axios";
import { axiosClient } from "./axiosClient";

export const getUsers = async () => {
  return axiosClient.get("/users");
};

export const getUserbyId = () => {
    return axiosClient.get("/user/id")
};
