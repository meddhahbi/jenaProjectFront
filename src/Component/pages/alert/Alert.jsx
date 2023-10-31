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
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div class="wrap">
          <div class="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="What are you looking for?"
              value={searchedValue}
              onChange={(e) => {
                setSearchedValue(e.target.value);
              }}
            />
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <br />

      <div className="alertTable">
        <table className="alerttable">
          <tr>
            <th className="alertth">Alert Title</th>
            <th className="alertth">Alert Description</th>
          </tr>
          {searchedAlert?.map((val, key) => {
            return (
              <tr key={key}>
                {" "}
                <td className="alerttd">{val.alertTitle}</td>
                <td className="alerttd">{val.alertDescription}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <br />
      <br />
      <br />
    </>
  );
};