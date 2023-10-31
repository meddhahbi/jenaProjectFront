import axios from "axios";
import React, { useEffect, useState } from "react";

const GigList = () => {
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8088/gigs")
      .then((response) => {
        setGigs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    // <div className="container">
    //     <br></br><br></br><br></br><br></br><br></br><br></br>
    //   <div class="my-projects-view">
    //     <div class="row">
    //       <div class="col-lg-12">
    //         <div class>
    //           <div class="card">
    //             <div class="card-header">
    //               <div class="row justify-content-between align-items-center">
    //                 <div class="col">
    //                   <h5 class="card-title">Gigs</h5>
    //                 </div>
    //               </div>
    //             </div>
    //             <div class="card-body">
    //               <div class="table-responsive table-box">
    //                 <table class="table table-center table-hover datatable">
    //                   <thead class="thead-pink">
    //                     <tr>
    //                       <th>Title</th>
    //                       <th>Description</th>
    //                       <th>Orders</th>
    //                       <th>Price</th>
    //                       <th>Category</th>
    //                       <th>Posted by</th>
    //                     </tr>
    //                   </thead>
    //                   <tbody>
    //                     {gigs.map((gig,index)=>(

    //                     <tr key={index}>
    //                       <td>{gig.gigTitle}</td>
    //                       <td>
    //                         <p class="mb-0">
    //                           {gig.gigDescription}
    //                         </p>
    //                       </td>
    //                       <td>{gig.orders}</td>
    //                       <td>{gig.categoryName}</td>
    //                       <td>{gig.username}</td>
    //                     </tr>
    //                     ))}
    //                   </tbody>
    //                 </table>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
   <div>
    <br></br><br></br><br></br>
    <div className="row">
    {gigs.map((gig, index) => (
      <div key={index} className="col-md-6 col-lg-12 col-xl-6">
        <div className="freelance-widget widget-author">
      <div class="freelance-widget widget-author">
        <div class="freelance-content">
          <a data-bs-toggle="modal" href="#rating" class="favourite">
            <i class="fas fa-star"></i>
          </a>
          <div class="author-heading">
            <div class="profile-img">
              <a href="#">
                <img src="assets/img/company/img-1.png" alt="author" />
              </a>
            </div>
            <div class="profile-name">
              <div class="author-location">
              {gig.username}
                <i class="fas fa-check-circle text-success verified"></i>
              </div>
            </div>
            <div class="freelance-info">
              <h3>
                <a href="#">{gig.gigTitle}</a>
              </h3>
              <div class="freelance-location mb-1">
                {gig.categoryName}
              </div>
              <div class="freelance-location">
                <i class="fas fa-map-marker-alt me-1"></i>Georgia, USA
              </div>
            </div>
            <div class="freelance-tags">
             <p>{gig.gigDescription}</p>
            </div>
            <div class="freelancers-price">$ {gig.price}</div>
          </div>
          <div class="counter-stats">
            <ul>
              <li>
                <h3 class="counter-value">4 Days Left</h3>
                <h5>Expiry</h5>
              </li>
              <li>
                <h3 class="counter-value">{gig.orders}</h3>
                <h5>Orders</h5>
              </li>
              <li>
                <h3 class="counter-value">
                  <span class="jobtype">Full Time</span>
                </h3>
                <h5>Job Type</h5>
              </li>
            </ul>
          </div>
        </div>
        <div class="cart-hover">
          <a href="project-details.html" class="btn-cart" tabindex="-1">
            Bid Now
          </a>
        </div>
      </div>
      </div>
    </div>
  ))}
</div>
</div>
  );
};

export default GigList;
