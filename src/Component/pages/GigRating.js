import axios from "axios";
import React, { useEffect, useState } from "react";

const GigRating = () => {

    const [reviews, setReviews] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");


    useEffect(() => {
        axios
          .get("http://localhost:8088/reviews")
          .then((response) => {
            setReviews(response.data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);

 
      const filteredReviews = reviews.filter((review) => {
        return review.gigTitle.toLowerCase().includes(searchQuery.toLowerCase());
      });
    
      return (
        
        <div className="container">
            <br></br><br></br><br></br><br></br><br></br><br></br>
    
            <input
            type="text"
            placeholder="Search by Gig Title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div class="my-projects-view">
            <div class="row">
              <div class="col-lg-12">
                <div class>
                  <div class="card">
                    <div class="card-header">
                      <div class="row justify-content-between align-items-center">
                        <div class="col">
                          <h5 class="card-title">Reviews</h5>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive table-box">
                        <table class="table table-center table-hover datatable">
                          <thead class="thead-pink">
                            <tr>
                              <th>Gig</th>
                              <th>Commentaire</th>
                              <th>Posted By</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredReviews.map((review,index)=>(
    
                            <tr key={index}>
                              <td>{review.gigTitle}</td>
                              <td>
                                <p class="mb-0">
                                  {review.ratingComment}
                                </p>
                              </td>
                              <td>{review.username}</td>
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

export default GigRating