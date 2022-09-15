import React from "react";
import Header from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";

var data;
var dataList;

function App() {
  // For render cafe list
  const [cafeList, setCafeList] = useState('')

  useEffect(() => {
    axios.get("http://localhost:8080/").then(function (response) {
      data = response.data;
      console.log(data);
      dataList = data.map((element) => {
        return <li key={element.id}>{element.name}</li>;
      });
      setCafeList(dataList)
    });
  }, []);

  return (
    <>
      <Header />
      <div id="cafe-list" style={{ marginTop: "20px" }}>
        <ul>{cafeList}</ul>
      </div>
    </>
  );
}

export default App;
