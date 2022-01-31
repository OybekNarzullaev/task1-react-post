import axios from "axios";

export const host = "https://react-post-app-task-1.herokuapp.com";
export function httpRequest(config) {
  return axios({
    ...config,
    headers: {
      // "Access-Control-Allow-Origin": "*",
      // "Content-type": "Application/json",
      //Authorization: getUser() ? `Bearer ` + getUser().token : "",
    },
  });
}
