import React from "react";
import Header from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";

var cafeList;
var listElement = [];
var renderList;

function App() {
  const [list, setList] = useState('')
  useEffect(() => {
    axios.get("http://localhost:8080/").then(function (response) {
      cafeList = response.data;
      // console.log(cafeList);
      cafeList.forEach((element) => {
        // console.log(element.name);
        listElement.push(element);
      });
      console.log(listElement);
      renderList = listElement.map((element) => {
        return <li key={element.id}>{element.name}</li>;
      });
      setList(renderList)
    });
  }, []);

  return (
    <>
      <Header />
      <div id="cafe-list" style={{ marginTop: "20px" }}>
        <ul>{list}</ul>
      </div>
    </>
  );
}

export default App;
