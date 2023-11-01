import React, { useEffect, useState } from "react";

export const Alert = () => {
  const [alert, setAlert] = useState([]);
  const apiUrl = "http://localhost:8088/alerts";
  const [searchedValue, setSearchedValue] = useState("");
  const [searchedAlert, setSearchedAlert] = useState(alert);
  const getAlert = () => {
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers if needed, e.g., authorization headers
      },
    })
      .then((response) => {
        if (!response.ok) {
          window.alert("oups");
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);

        setAlert(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAlert();
  }, []);
  useEffect(() => {
    // search alert by titile where title is like searchedValue
    if (searchedValue == "") setSearchedAlert(alert);
    else {
      const filtredAlert = alert.filter((val) => {
        return val.alertTitle
          .toLowerCase()
          .includes(searchedValue.toLowerCase());
      });
      setSearchedAlert(filtredAlert);
    }
  }, [searchedValue, alert]);

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
                    <h5 className="card-title">Alerts</h5>
                  </div>
                  <div className="col">
                    <div className="form-group mt-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={searchedValue}
                        onChange={(e) => setSearchedValue(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <button className="btn btn-primary">Search</button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive table-box">
                  <table className="table table-center table-hover datatable">
                    <thead className="thead-pink">
                      <tr>
                        <th>UserName</th>
                        <th>Alert Title </th>
                        <th>Reply Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchedAlert.map((condidature, index) => (
                        <tr key={index}>
                          <td>{condidature.username}</td>
                          <td>
                            {condidature.alertTitle == ""
                              ? "BUG Detected"
                              : condidature.alertTitle}
                          </td>
                          <td>{condidature.alertDescription}</td>
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
