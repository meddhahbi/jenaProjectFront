import axios from "axios";
import React, { useEffect, useState } from "react";

const BlogList = () => {



  const [blogs, setBlogs] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:8088/blogs")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = () => {


    axios.get(`http://localhost:8088/blogs/filter/${value}`)
      .then((response) => {
        setBlogs(response.data);

      })
      .catch((error) => {
        console.error('Error fetching data:', error);

      });
  };

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
                      <h5 class="card-title">Blogs</h5>
                    </div>
                  </div>
                </div>

                <div class="card-body">
                  <div class="table-responsive table-box">
                    
                    <div class="pro-content">
                      <input  class="form-control"
                        type="text"
                        placeholder="Search blogs by title"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                      <br></br>
                      <button class="btn btn-primary submit-btn" type="submit" onClick={handleSearch}>Search</button>
                    </div>
                    <br></br>
                    <table class="table table-center table-hover datatable">
                      <thead class="thead-pink">
                        <tr>
                        <th>Blog_id</th>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Username</th>
                          <th>Comment</th>
                        </tr>
                      </thead>
                      <tbody>
                        {blogs.map((blog, index) => (

                          <tr key={index}>
                            <td>{blog.blogId}</td>
                            <td>{blog.blogTitle}</td>
                            <td>
                              <p class="mb-0">
                                {blog.blogDescription}
                              </p>
                            </td>
                            <td>{blog.username}</td>
                            <td>
                              {blog.comment}</td>
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

export default BlogList;
