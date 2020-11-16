import axios from "axios";
import { URL } from "../App";

const logUser = (user, pass) => {
  return new Promise(function (resolve, reject) {
    const data = axios({
      method: "POST",
      url: `${URL}/user/login`,
      data: {
        email: user,
        password: pass,
      },
    })
      .then((res) => {
        resolve({ status: "success", data: res.data });
      })
      .catch((err) => {
        reject({ status: "fail", message: err.message });
      });
    console.log(data);
  });
};
export { logUser };
