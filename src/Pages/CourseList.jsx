import PropTypes from 'prop-types';
import Courselists from './CourseLists';

const CourseList = ({ dataList, action }) => {


    return (
        <>
            {console.log(`Action: ${action}`)}
            <div className="main-div">
                <div className="container">
                    <div className="row">
                        {dataList.map((element) => (
                            <Courselists key={element.id} {...element} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

CourseList.propTypes = {
    dataList: PropTypes.array,
    action: PropTypes.string
}

export default CourseList