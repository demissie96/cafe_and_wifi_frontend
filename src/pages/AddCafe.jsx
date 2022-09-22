import React from "react";
import Header from "./components/Header";
import { useState } from "react";
import axios from "axios";
import "./AddCafe.css";
import { useNavigate } from "react-router-dom";

const apiURL = process.env.REACT_APP_BACKEND_URL;

function AddCafe() {
  const [validated, setValidated] = useState("");
  const navigate = useNavigate();

  function AddNewCafe(e) {
    e.preventDefault();

    let name = e.target.name.value;
    let location = e.target.location.value;
    let map_url = e.target.map_url.value;
    let image_url = e.target.image_url.value;
    let wifi = e.target.wifi.checked;
    let socket = e.target.socket.checked;
    let toilet = e.target.toilet.checked;
    let take_calls = e.target.take_calls.checked;
    let seats = e.target.seats.value;
    let price = e.target.price.value;

    axios
      .post(
        apiURL,
        {},
        {
          headers: {
            name: name,
            location: location,
            map_url: map_url,
            img_url: image_url,
            has_wifi: wifi ? 1 : 0,
            has_sockets: socket ? 1 : 0,
            has_toilet: toilet ? 1 : 0,
            can_take_calls: take_calls ? 1 : 0,
            seats: seats,
            coffee_price: price,
          },
        }
      )
      .then(function (response) {
        if (response.data === "already added") {
          var nameInput = document.getElementById("name");
          nameInput.focus();
          setTimeout(() => {
            alert(`"${name}" cafe is already in the database.`);
            nameInput.value = "";
          }, 500);
        } else {
          navigate("/");
        }
      });
  }

  return (
    <>
      <Header visibility="hidden" />
      <div>
        <form id="form" onSubmit={(e) => AddNewCafe(e)} className={validated}>
          <div>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Cafe"
              required
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="City"
              required
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="map_url" className="form-label">
              Google Map - URL
            </label>
            <input
              type="text"
              className="form-control"
              id="map_url"
              placeholder="https://goo.gl/maps/KhaRRaNjndbmGmsS8"
              required
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="image_url" className="form-label">
              Image - URL
            </label>
            <input
              type="text"
              className="form-control"
              id="image_url"
              placeholder="https://www.example.com/image"
              required
            />
          </div>
          <hr className="my-4"></hr>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wifi" />
            <label className="form-check-label" htmlFor="wifi">
              Wifi
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="socket" />
            <label className="form-check-label" htmlFor="socket">
              Socket
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="toilet" />
            <label className="form-check-label" htmlFor="toilet">
              Toilet
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="take_calls"
            />
            <label className="form-check-label" htmlFor="take_calls">
              Take Calls
            </label>
          </div>
          <hr className="my-4"></hr>
          <div>
            <label htmlFor="seats" className="form-label">
              Seats
            </label>
            <input
              type="text"
              className="form-control"
              id="seats"
              placeholder="20-30"
              required
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="price" className="form-label">
              Coffee Price
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder="$2.50"
              required
            />
          </div>
          <br></br>
          <button
            className="w-100 btn btn-primary btn-lg"
            type="submit"
            onClick={() => setValidated("was-validated")}
          >
            Add Cafe
          </button>
        </form>
      </div>
    </>
  );
}

export default AddCafe;
