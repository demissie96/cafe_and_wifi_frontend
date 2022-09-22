import axios from "axios";

export function ResetDatabase() {
  axios.get("http://localhost:8080/reset").then(function (response) {
    window.location.reload();
  });
}
