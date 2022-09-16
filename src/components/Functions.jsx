import axios from "axios";

export function ResetDatabase() {
  console.log("Reset original database");
  axios.get("http://localhost:8080/reset").then(function (response) {
    console.log(response);
    window.location.reload();
  });
}
