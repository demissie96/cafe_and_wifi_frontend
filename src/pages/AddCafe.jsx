import React from "react";
import Header from "./components/Header";
import "./AddCafe.css";

function AddCafe() {
  return (
    <>
      <Header />
      <div>
        <form
          style={{
            margin: "80px auto 20px",
            width: "400px",
            padding: "0 20px 0",
          }}
        >
          <div>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Cafe"
              required=""
            />
            <div className="invalid-feedback">Name is required</div>
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
              required=""
            />
            <div className="invalid-feedback">Location is required</div>
          </div>
          <br></br>
          <div>
            <label htmlFor="map-url" className="form-label">
              Google Map - URL
            </label>
            <input
              type="text"
              className="form-control"
              id="map-url"
              placeholder="https://goo.gl/maps/KhaRRaNjndbmGmsS8"
              required=""
            />
            <div className="invalid-feedback">Google Map - URL is required</div>
          </div>
          <br></br>
          <div>
            <label htmlFor="image-url" className="form-label">
              Image - URL
            </label>
            <input
              type="text"
              className="form-control"
              id="image-url"
              placeholder="https://www.example.com/image"
              required=""
            />
            <div className="invalid-feedback">Image - URL is required</div>
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
              id="take-calls"
            />
            <label className="form-check-label" htmlFor="take-calls">
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
              required=""
            />
            <div className="invalid-feedback">Seats is required</div>
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
              required=""
            />
            <div className="invalid-feedback">Coffee Price is required</div>
          </div>
          <br></br>
          <button className="w-100 btn btn-primary btn-lg" type="submit">
            Add Cafe
          </button>
        </form>
      </div>
    </>
  );
}

export default AddCafe;
