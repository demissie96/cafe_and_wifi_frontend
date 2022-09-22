import axios from "axios";
const apiURL = "https://cafeandwifibackend.johannesdemissi.repl.co";

export function ResetDatabase() {
  axios.get(`${apiURL}/reset`).then(function (response) {
    window.location.reload();
  });
}
