import axios from "axios";
import React, { useEffect, useState } from "react";

const CommentList = () => {

  

  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8088/comments")
      .then((response) => {
        setComments(response.data);
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
                      <h5 class="card-title">Comments</h5>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive table-box">
                    <table class="table table-center table-hover datatable">
                      <thead class="thead-pink">
                        <tr>
                        <th>Comment_id</th>
                          <th>Comment</th>
                          <th>username</th>
                         
                        </tr>
                      </thead>
                      <tbody>
                        {comments.map((c,index)=>(

                        <tr key={index}>
                          <td>{c.commentId}</td>
                          <td>{c.comment}</td>
                          <td>{c.username}</td>
                          
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

export default CommentList;
