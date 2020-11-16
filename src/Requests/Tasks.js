import axios from "axios";
import { URL } from "../App";

const getTasks = () => {
  return new Promise(function (resolve, reject) {
    axios({
      method: "GET",
      url: `${URL}/task`,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("jwt") || "",
      },
    })
      .then((res) => {
        if (res.status === "success") {
          resolve(res.data);
        }
        resolve({ status: res.status, err: res.message });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { getTasks };
