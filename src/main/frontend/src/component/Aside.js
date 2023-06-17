import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Aside() {
    const [title, setTitle] = useState([]);

    return (
        <aside>
            <div>
                <ol className="aside_ol">
                    <li>
                        <Link to="/communication">
                            <h3>Communication</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Archiving">
                            <h3>Archiving</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projectList">
                            <h3>Project</h3>
                        </Link>
                    </li>
                    <ol className="project_ol">
                        <li>
                            <Link to="/Project">
                                <h4>project</h4>
                            </Link>
                            <Link to="/Project">
                                <h4>project</h4>
                            </Link>
                            <Link to="/Project">
                                <h4>project</h4>
                            </Link>
                            <Link to="/Project">
                                <h4>project</h4>
                            </Link>
                        </li>
                    </ol>
                </ol>
            </div>
        </aside>
    );
}
