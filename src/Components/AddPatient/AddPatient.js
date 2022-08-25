import "bootstrap/dist/css/bootstrap.css";

const AddPatient = () => {
  return (
    <>
      <div className="row">
        <div clasName="col-6">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div clasName="col-6">
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="date"
              placeholder="Enter DOB"
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div clasName="col-6">
          <label>Gender</label>
          <select id="gender">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div clasName="col-6">
          <label>Blood Group</label>
          <select id="bloodGroup">
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
        <div clasName="col-6">
          <div className="form-group">
            <label>Height</label>
            <input
              type="number"
              className="form-control"
              id="height"
              placeholder="Enter Height"
              min="0"
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div clasName="col-6">
          <div className="form-group">
            <label>Weight</label>
            <input
              type="number"
              className="form-control"
              id="weight"
              placeholder="Enter Height"
              min="0"
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <button type="button" className="btn btn-success">
            Save
          </button>
        </div>
        <div className="col-6">
          <button type="button" className="btn btn-danger">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
export default AddPatient;
