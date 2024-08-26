import { Link, Outlet } from "react-router-dom"
import './ParentRoute.css'
import { useState } from "react"
import PropTypes from 'prop-types'


const ParentRoute = ({ handleChange }) => {
    const [activeRoute, setActiveRoute] = useState('All')

    const onCourseChange = (action) => {
        setActiveRoute(action);
        handleChange(action)
    }


    return (
        <>
            <div className="main-div">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="nav" style={{ background: 'darkGrey' }}>
                                <Link to="/" style={{ borderBottom: activeRoute === "All" ? "5px solid yellow" : "initial" }}>
                                    <button onClick={() => onCourseChange("All")}>All</button>
                                </Link>
                                <Link to="/fsd" style={{ borderBottom: activeRoute === "fsd" ? "5px solid yellow" : "initial" }}>
                                    <button onClick={() => onCourseChange("fsd")}>Full Stack Development</button>
                                </Link>
                                <Link to="/dataScience" style={{ borderBottom: activeRoute === "dataScience" ? "5px solid yellow" : "initial" }}>
                                    <button onClick={() => onCourseChange("dataScience")}>Data Science</button>
                                </Link>
                                <Link to="/cyberSecurity" style={{ borderBottom: activeRoute === "cyberSecurity" ? "5px solid yellow" : "initial" }}>
                                    <button onClick={() => onCourseChange("cyberSecurity")}>Cyber Security</button>
                                </Link>
                                <Link to="/career" style={{ borderBottom: activeRoute === "career" ? "5px solid yellow" : "initial" }}>
                                    <button onClick={() => onCourseChange("career")}>Career</button>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

ParentRoute.propTypes = {
    handleChange: PropTypes.func
}
export default ParentRoute