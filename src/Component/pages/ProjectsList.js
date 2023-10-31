import axios from "axios";
import React, { useEffect, useState } from "react";

const ProjectsList = () => {


    const [companyFilter, setCompanyFilter] = useState(""); // Company filter input
    const [technologyFilter, setTechnologyFilter] = useState(""); // Technology filter input
    const [filteredProjects, setFilteredProjects] = useState([]); // Store filtered projects

    const [projects, setProjects] = useState([]);

    const [categories, setCategories] = useState([])
    function refresh() {
        axios
            .get("http://localhost:8088/projects")
            .then((response) => {
                setProjects(response.data);
                setFilteredProjects(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
    useEffect(() => {
        axios
            .get("http://localhost:8088/projects")
            .then((response) => {
                setProjects(response.data);
                setFilteredProjects(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:8088/categories/withSubCategories")
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    function filterByCategory(categoryId) {
        axios
            .get(`http://localhost:8088/projects/${categoryId}`)
            .then((response) => {
                setProjects(response.data);
                setFilteredProjects(response.data)
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
    useEffect(() => {
        // Function to filter projects by company and technology
        function filterByCompanyAndTechnology() {
            // Filter projects based on company and technology filters
            const filtered = projects.filter((project) => {
                const companyMatch = project.company.toLowerCase().includes(companyFilter.toLowerCase());
                const technologyMatch = project.technology.toLowerCase().includes(technologyFilter.toLowerCase());
                return companyMatch && technologyMatch;
            });

            setFilteredProjects(filtered); // Update filtered projects
        }

        // Call the filter function when companyFilter or technologyFilter changes
        filterByCompanyAndTechnology();
    }, [companyFilter, technologyFilter]);
    return (
        <div>

            <div className="container">
                <br></br><br></br><br></br><br></br><br></br><br></br>

                <div class="my-projects-view">

                    <div class="row">
                        <div class="col-xl-3 col-md-4 theiaStickySidebar">

                        <div class="settings-widget">
    <div class="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
        <a href="user-account-details.html"></a>
        <div class="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
            <a href="user-account-details.html">
                <h3 className="mb-0">
                    <i className="fas fa-sitemap" style={{ marginRight: '5px' }}></i>
                    Categories
                </h3>
            </a>
        </div>
    </div>
    {categories.map((category) => (
        <div className="settings-menu" style={{ borderBottom: '1px solid #ccc', padding: '5px 0' }}>
            <ul>
                <li class="nav-item">
                    <a onClick={() => filterByCategory(category.categoryId)} class="nav-link">
                        {category.categoryName}
                    </a>
                </li>
                {category.types.split(',').map((type) => (
                    type.trim() !== "Category" && (
                        <li class="nav-item" key={type}>
                            {type.trim()}
                        </li>
                    )
                ))}
            </ul>
        </div>
    ))}
</div>

                        </div>
                        <div class="col-xl-9 col-md-8">
                            <div class>

                                <div class="card">

                                    <div class="card-header">
                                        <div class="row justify-content-between align-items-center">
                                            <div class="col">
                                                <h5 class="card-title" onClick={() => refresh()} >Projects</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">

                                   <div className="filter-inputs" style={{ textAlign: 'center' }} >
                                   <a className="btn filter-btn" href="javascript:void(0);" id="filter_search">
<i className="fas fa-filter"></i>
</a>                                            <div className="input-container" style={{ display: 'inline-block', marginRight: '0' }}>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="companyFilter"
                                                    placeholder="Company"
                                                    value={companyFilter}
                                                    onChange={(e) => setCompanyFilter(e.target.value)} // Handle company filter input changes
                                                />
                                            </div>
                                            <div className="input-container" style={{ display: 'inline-block', marginRight: '0' }}>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="technologyFilter"
                                                    placeholder="Technology"
                                                    value={technologyFilter}
                                                    onChange={(e) => setTechnologyFilter(e.target.value)} // Handle technology filter input changes
                                                />
                                            </div>
                                        </div>
<br/>
                                        <div class="table-responsive table-box">
                                            <table class="table table-center table-hover datatable">
                                                <thead class="thead-pink">
                                                    <tr>
                                                        <th></th>

                                                        <th>Title</th>
                                                        <th>Budget</th>
                                                        <th>Progress</th>
                                                        <th>Technology</th>
                                                        <th>Company</th>
                                                        <th>Category</th>
                                                        <th>User</th>
                                                      


                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {filteredProjects.map((projet, index) => (









                                                        <tr key={index}>
                                                            <td></td>

                                                            <td>{projet.projectTitle}</td>
                                                            <td>
                                                                {projet.budget}
                                                            </td>
                                                            <td>
                                                                <div class="progress rounded-pill">
                                                                    <div class="progress-bar bg-primary rounded-pill" role="progressbar" style={{ width: `${projet.progress}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                {projet.technology}
                                                            </td>
                                                            <td>{projet.company}</td>
                                                            <td>
                                                                {projet.categoryName}
                                                            </td>
                                                            <td>
                                                                {projet.username}
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
};

export default ProjectsList;
