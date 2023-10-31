import React, {useEffect, useState} from 'react';
import axios from "axios";

function OffresList(props) {
    const [offres, setOffres] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8088/offres")
            .then((response) => {
                console.log(response.data)
                setOffres(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <div className="container">
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <div className="my-projects-view">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className>
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col">
                                                <h5 className="card-title">Offres</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive table-box">
                                            <table className="table table-center table-hover datatable">
                                                <thead className="thead-pink">
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Description</th>
                                                    <th>User</th>
                                                    <th>Candidat firstname</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {offres.map((offre, index) => (

                                                    <tr key={index}>
                                                        <td>{offre.offreTitle}</td>
                                                        <td>
                                                            <p className="mb-0">
                                                                {offre.offreDescription}
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">
                                                                {offre.username}
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">
                                                                {offre.firstName}
                                                            </p>
                                                        </td>
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
            </div>
        </div>
    );
}

export default OffresList;
