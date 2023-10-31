import axios from "axios";
import React, { useEffect, useState } from "react";

const ConadidatureList = () => {
  const [condidatures, setConadidature] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Ajout du terme de recherche

  useEffect(() => {
    // Fonction pour récupérer les données initiales
    fetchConadidatures("");
  }, []);

  const fetchConadidatures = (searchTerm) => {
    axios
      .get(`http://localhost:8088/conadidature?searchTerm=${searchTerm}`)
      .then((response) => {
        setConadidature(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleSearch = () => {
    fetchConadidatures(searchTerm);
  };

  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="my-projects-view">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="row justify-content-between align-items-center">
                  <div className="col">
                    <h5 className="card-title">Conadidature</h5>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <button
                      className="btn btn-primary"
                      onClick={handleSearch}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive table-box">
                  <table className="table table-center table-hover datatable">
                    <thead className="thead-pink">
                      <tr>
                        <th>Condidature ID</th>
                        <th>Email</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Lettre</th>
                        <th>Offre Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {condidatures.map((condidature, index) => (
                        <tr key={index}>
                          <td>{condidature.condidatureId}</td>
                          <td>{condidature.email}</td>
                          <td>{condidature.lastName}</td>
                          <td>{condidature.firstName}</td>
                          <td>{condidature.lettre}</td>
                          <td>{condidature.offreDescription}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConadidatureList;
