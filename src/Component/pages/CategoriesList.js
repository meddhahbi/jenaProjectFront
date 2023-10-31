import axios from "axios";
import React, { useEffect, useState } from "react";

const CategoriesList = () => {

  

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8088/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    
    <div className="container">
        <br></br><br></br><br></br><br></br><br></br><br></br>
      <div class="my-projects-view">
        <div class="row">
          <div class="col-lg-12">
            <div class>
              <div class="card">
                <div class="card-header">
                  <div class="row justify-content-between align-items-center">
                    <div class="col">
                      <h5 class="card-title">Categories</h5>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive table-box">
                    <table class="table table-center table-hover datatable">
                      <thead class="thead-pink">
                        <tr>
                          <th>Name</th>
                          <th>Description</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        {categories.map((category,index)=>(

                        <tr key={index}>
                          <td>{category.categoryName}</td>
                          <td>
                            <p class="mb-0">
                              {category.categoryDescription}
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
  );
};

export default CategoriesList;
