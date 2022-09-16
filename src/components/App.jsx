import React from "react";
import Header from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

var data;
var dataList;

function App() {
  // For render cafe list
  const [cafeList, setCafeList] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/").then(function (response) {
      data = response.data;
      console.log(data);
      dataList = data.map((element) => {
        return (
          <div className="row mb-3 text-center cafe-box" key={element.id}>
            <div className="modify-cafe">
              <a target="_blank" title="Delete">🗑️</a>
              <br />
              <a target="_blank" title="Edit">📝</a>
            </div>

            <div className="col-md-3 themed-grid-col ">
              <div className="first-box">
                <h4 id="cafe-name">{element.name}</h4>
              </div>
            </div>
            <div className="col-md-3 themed-grid-col">
              <div className="second-box">
                <a target="_blank" href={element.map_url}>Google Map</a>
                <div id="cafe-location">{element.location}</div>
              </div>
            </div>
            <div className="col-md-3 themed-grid-col">
              <div className="third-box">
                <div>Wifi: {element.has_wifi === 1 ? '✅' : '❌'}</div>
                <div>Take Calls: {element.can_take_calls === 1 ? '✅' : '❌'}</div>
                <div>Socket: {element.has_sockets === 1 ? '✅' : '❌'}</div>
                <div>Toilet: {element.has_toilet === 1 ? '✅' : '❌'}</div>
              </div>
            </div>
            <div className="col-md-3 themed-grid-col">
              <div className="fourth-box">
                <a target="_blank" href={element.img_url}>Image</a>

                <div id="cafe-seats">Seats: {element.seats}</div>
                <div id="cafe-price">Coffee Price: {element.coffee_price}</div>
              </div>
            </div>
          </div>
          // <div className="cafe-box" key={element.id}>

          // </div>
        );
      });
      setCafeList(dataList);
    });
  }, []);

  return (
    <>
      <Header />
      <div id="cafe-list" style={{ margin: "20px" }}>
        <div>{cafeList}</div>
      </div>
    </>
  );
}

export default App;
