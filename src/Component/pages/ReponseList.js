import React, { useEffect, useState } from "react";
import axios from "axios";

const ReponseList = () => {
  const [reponses, setReponses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchReponses("");
  }, []);

  const fetchReponses = (searchTerm) => {
    axios
      .get(`http://localhost:8088/Reponse?searchTerm=${searchTerm}`)
      .then((response) => {
        setReponses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleSearch = () => {
    fetchReponses(searchTerm);
  };

  return (
    <div className="container">
      <div className="my-projects-view">
        <div className="row">
          <div className="col-lg-12">
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="card">
              <div className="card-header">
                <div className="row justify-content-between align-items-center">
                  <div className="col">
                    <h5 className="card-title">Réponses</h5>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Rechercher"
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
                      Rechercher
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive table-box">
                  <table className="table table-center table-hover datatable">
                    <thead className="thead-pink">
                      <tr>
                        <th>Réponse ID</th>
                        <th>Réponse</th>
                        <th>Email de la Candidature</th>
                        <th>Nom de la Candidature</th>
                        <th>Prénom de la Candidature</th>
                        <th>Nom d'Utilisateur</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reponses.map((reponse, index) => (
                        <tr key={index}>
                          <td>{reponse.reponseId}</td>
                          <td>{reponse.reponse}</td>
                          <td>{reponse.email}</td>
                          <td>{reponse.lastName}</td>
                          <td>{reponse.firstName}</td>
                          <td>{reponse.username}</td>
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

export default ReponseList;
