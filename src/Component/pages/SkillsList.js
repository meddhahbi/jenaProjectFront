import React, {useEffect, useState} from 'react';
import axios from "axios";

function SkillsList(props) {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8088/skills")
            .then((response) => {
                console.log(response.data)
                setSkills(response.data);
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
                                                <h5 className="card-title">Skills</h5>
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
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {skills.map((skill, index) => (

                                                    <tr key={index}>
                                                        <td>{skill.skillName}</td>
                                                        <td>
                                                            <p className="mb-0">
                                                                {skill.skillDescription}
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

export default SkillsList;
