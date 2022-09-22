import axios from "axios";
const apiURL = process.env.REACT_APP_BACKEND_URL;

export function ResetDatabase() {
  axios.get(`${apiURL}/reset`).then(function (response) {
    window.location.reload();
  });
}
