import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import "reactjs-popup/dist/index.css";
import { useRef, useEffect, useState } from "react";
import Popup from "../Popup/Popup";
import axios from "axios";
import { v4 } from "uuid";

const AddPatient = () => {
  const navigate = useNavigate();
  const onToggle = () => {
    navigate("/");
  };
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Male");
  const [bg, setBg] = useState("O+ve");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const handelChangeName = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  const handelChangeDate = (event) => {
    setDob(event.target.value);
    console.log(dob);
  };
  const changeHandlerGender = (event) => {
    setGender("Female");
    console.log(gender);
  };
  const handleChangeBG = (event) => {
    setBg(event.target.value);
    console.log(bg);
  };
  const handleChangeHeight = (event) => {
    setHeight(event.target.value);
    console.log(height);
  };
  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
    console.log(weight);
  };
  const [showForm, setShowForm] = useState(false);
  const onSave = (event) => {
    axios.get("http://localhost:8000/users").then(function (response) {
      console.log(response);
    });
    axios
      .post("http://localhost:8000/users", {
        id: v4(),
        name: name,
        dob: dob,
        gender: gender,
        "blood group": bg,
        height: height,
        weight: weight,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    navigate("/");
    setShowForm(!showForm);
  };
  const btn = useRef(null);
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              onChange={handelChangeName}
              value={name}
            ></input>
          </div>
        </div>
        <br></br>
        <div className="col-lg-6">
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="date"
              placeholder="Enter DOB"
              onChange={handelChangeDate}
              value={dob}
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <label>Gender</label>
          <select id="gender" value={gender} onChange={changeHandlerGender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <label>Blood Group</label>
          <select id="bloodGroup" onChange={handleChangeBG} value={bg}>
            <option>O+ve</option>
            <option>O-ve</option>
            <option>A+ve</option>
            <option>A-ve</option>
            <option>B+ve</option>
            <option>B-ve</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <label>Height</label>
            <input
              type="number"
              className="form-control"
              id="height"
              placeholder="Enter Height"
              min="0"
              value={height}
              onChange={handleChangeHeight}
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <label>Weight</label>
            <input
              type="number"
              className="form-control"
              id="weight"
              placeholder="Enter Height"
              min="0"
              onChange={handleChangeWeight}
              value={weight}
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <button
            type="button"
            className="btn btn-success"
            onClick={onSave}
            id="abc"
          >
            Save
          </button>
          {showForm && <Popup />}
        </div>
        <div className="col-6">
          <button type="button" className="btn btn-danger" onClick={onToggle}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
export default AddPatient;
