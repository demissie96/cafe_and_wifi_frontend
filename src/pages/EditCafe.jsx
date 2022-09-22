import React from "react";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AddCafe.css";
import { useNavigate } from "react-router-dom";

function EditCafe() {
  const [validated, setValidated] = useState(""); // For validation check.
  const navigate = useNavigate(); 

  // Get the id number from the url.
  var id = parseInt(window.location.href.split("edit-cafe/")[1]);

  function LoadData(cafe_id) {
    axios
      .get("http://localhost:8080/get-selected", {
        headers: {
          id: cafe_id,
        },
      })
      .then(function (response) {
        // Preload the original data into the form.
        document.getElementById("name").value = response.data.name;
        document.getElementById("location").value = response.data.location;
        document.getElementById("map_url").value = response.data.map_url;
        document.getElementById("image_url").value = response.data.img_url;
        document.getElementById("seats").value = response.data.seats;
        document.getElementById("price").value = response.data.coffee_price;
        document.getElementById("wifi").defaultChecked =
          response.data.has_wifi === 1 ? true : false;
        document.getElementById("socket").defaultChecked =
          response.data.has_sockets === 1 ? true : false;
        document.getElementById("toilet").defaultChecked =
          response.data.has_toilet === 1 ? true : false;
        document.getElementById("take_calls").defaultChecked =
          response.data.can_take_calls === 1 ? true : false;
      });
  }

  // On first render load data into the form.
  useEffect(() => {
    LoadData(id);
  }, []);

  // Send updated data into the database.
  function UpdateCafe(e) {
    e.preventDefault();
  }

  // function AddNewCafe(e) {
  //   e.preventDefault();

  //   let name = e.target.name.value;
  //   let location = e.target.location.value;
  //   let map_url = e.target.map_url.value;
  //   let image_url = e.target.image_url.value;
  //   let wifi = e.target.wifi.checked;
  //   let socket = e.target.socket.checked;
  //   let toilet = e.target.toilet.checked;
  //   let take_calls = e.target.take_calls.checked;
  //   let seats = e.target.seats.value;
  //   let price = e.target.price.value;

  //   console.log(`name: ${name},
  //    location: ${location},
  //    map_url: ${map_url},
  //    image_url: ${image_url},
  //    wifi: ${wifi},
  //    socket: ${socket},
  //    toilet: ${toilet},
  //    take_calls: ${take_calls},
  //    seats: ${seats},
  //    price: ${price}`);

  // axios
  //   .post(
  //     "http://localhost:8080/",
  //     {},
  //     {
  //       headers: {
  //         name: name,
  //         location: location,
  //         map_url: map_url,
  //         img_url: image_url,
  //         has_wifi: wifi ? 1 : 0,
  //         has_sockets: socket ? 1 : 0,
  //         has_toilet: toilet ? 1 : 0,
  //         can_take_calls: take_calls ? 1 : 0,
  //         seats: seats,
  //         coffee_price: price,
  //       },
  //     }
  //   )
  //   .then(function (response) {
  //     console.log("response: ********************");
  //     console.log(response.data);
  //     if (response.data === "already added") {
  //       var nameInput = document.getElementById("name");
  //       nameInput.focus();
  //       setTimeout(() => {
  //         alert(`"${name}" cafe is already in the database.`);
  //         nameInput.value = "";
  //       }, 500);
  //     } else {
  //       navigate("/");
  //     }
  //   });

  return (
    <>
      <Header visibility="hidden" />
      <div>
        <form id="form" onSubmit={(e) => UpdateCafe(e)} className={validated}>
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
export default EditCafe;
