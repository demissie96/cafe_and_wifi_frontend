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
              <div>
                <a>🗑️</a>
              </div>
              <div>
                <a>📝</a>
              </div>
            </div>

            <div className="col-md-3 themed-grid-col ">
              <div className="first-box">
                <h4 className="cafe-box-element" id="cafe-name">
                  {element.name}
                </h4>
              </div>
            </div>
            <div className="col-md-3 themed-grid-col">
              <div className="second-box">
                <a className="cafe-box-element" href={element.map_url}>
                  Google Map
                </a>
                <div className="cafe-box-element" id="cafe-location">
                  City: {element.location}
                </div>
              </div>
            </div>
            <div className="col-md-3 themed-grid-col">
              <div className="third-box">
                <div className="cafe-box-element">Wifi: {element.has_wifi}</div>
                <div className="cafe-box-element">
                  Take Calls: {element.can_take_calls}
                </div>
                <div className="cafe-box-element">
                  Socket: {element.has_sockets}
                </div>
                <div className="cafe-box-element">
                  Toilet: {element.has_toilet}
                </div>
              </div>
            </div>
            <div className="col-md-3 themed-grid-col">
              <div className="fourth-box">
                <a className="cafe-box-element" href={element.img_url}>
                  Image
                </a>

                <div className="cafe-box-element" id="cafe-seats">
                  Seats: {element.seats}
                </div>
                <div className="cafe-box-element" id="cafe-price">
                  Coffee Price: {element.coffee_price}
                </div>
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
