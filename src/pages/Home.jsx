import React from "react";
import Header from "./components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

var data;
var dataList;
const apiURL = process.env.REACT_APP_BACKEND_URL;

function Home() {
  // For render cafe list
  const [cafeList, setCafeList] = useState("");
  // For navigating among pages
  const navigate = useNavigate();

  function GetCafeList() {
    axios.get(apiURL).then(function (response) {
      data = response.data;
      dataList = data.map((element) => {
        return (
          <div className="row mb-3 text-center cafe-box" key={element.id}>
            <div className="modify-cafe">
              <button
                target="_blank"
                title="Delete"
                onClick={() => DeleteCafe(element.id)}
              >
                🗑️
              </button>
              <br />
              <button
                target="_blank"
                title="Edit"
                onClick={() => {
                  navigate(`edit-cafe/${element.id}`);
                }}
              >
                📝
              </button>
            </div>

            <div className="col-md-3 themed-grid-col ">
              <div className="first-box">
                <h4 id="cafe-name">{element.name}</h4>
              </div>
            </div>
            <div className="col-md-3 themed-grid-col">
              <div className="second-box">
                <a
                  target="_blank"
                  href={element.map_url}
                  rel="noopener noreferrer"
                >
                  Google Map
                </a>
                <div id="cafe-location">{element.location}</div>
              </div>
            </div>
            <div className="col-md-3 themed-grid-col">
              <div className="third-box">
                <div>Wifi: {element.has_wifi === 1 ? "✅" : "❌"}</div>
                <div>
                  Take Calls: {element.can_take_calls === 1 ? "✅" : "❌"}
                </div>
                <div>Socket: {element.has_sockets === 1 ? "✅" : "❌"}</div>
                <div>Toilet: {element.has_toilet === 1 ? "✅" : "❌"}</div>
              </div>
            </div>
            <div className="col-md-3 themed-grid-col">
              <div className="fourth-box">
                <a
                  target="_blank"
                  href={element.img_url}
                  rel="noopener noreferrer"
                >
                  Image
                </a>

                <div id="cafe-seats">Seats: {element.seats}</div>
                <div id="cafe-price">Coffee Price: {element.coffee_price}</div>
              </div>
            </div>
          </div>
        );
      });
      setCafeList(dataList);
    });
  }

  function DeleteCafe(id) {
    axios
      .delete(apiURL, {
        headers: {
          id: id,
        },
      })
      .then(function (response) {
        GetCafeList();
      });
  }

  useEffect(() => {
    GetCafeList();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header visibility="visible" />
      <div id="cafe-list" style={{ margin: "80px 20px 20px" }}>
        <div>{cafeList}</div>
      </div>
    </>
  );
}

export default Home;
