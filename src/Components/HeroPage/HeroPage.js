import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddPatient from "../AddPatient/AddPatient";

const HeroPage = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const onToggle = () => {
    navigate("/forms");
    setShowForm(!showForm);
  };
  return (
    <div className="jumbotron">
      <h1 className="display-4">Vaccination Scheduling App</h1>
      <p className="lead">
        Vaccines are life savers! Get vaccinated and be a boon to the society!
      </p>
      <hr className="my-4"></hr>
      <p>
        Clicking on Add Patient will open a form which will add a patient for
        vaccination
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" role="button" onClick={onToggle}>
          Add Patient
        </a>
      </p>
      <br />
      {showForm && <AddPatient />}
      <br />
    </div>
  );
};
export default HeroPage;
