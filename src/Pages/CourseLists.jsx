import PropTypes from 'prop-types'


const Courselists = ({ courseName, courseType, courseImage }) => {
    return (
        <>
            <div className="col-lg-3">
                <div className="card" style={{ width: '18rem', margin: '10px 0px', height: '29rem' }}>
                    <img src={courseImage} className="card-img-top" alt={courseName} style={{ height: '16rem', width: '18rem' }} />
                    <div className="card-body">
                        <h5 className="card-title">{courseName}</h5>
                        <p className="card-text">Course Type: {courseType.toUpperCase()}</p>
                        <p style={{ paddingTop: '3rem', height: '5rem' }}>
                            <a href="#" className="btn btn-primary" style={{ marginTop: '10px', float: 'right' }}>Know More</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

Courselists.propTypes = {
    id: PropTypes.number,
    courseName: PropTypes.string,
    courseType: PropTypes.string,
    courseImage: PropTypes.string
}

export default Courselists