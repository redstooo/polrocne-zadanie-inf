import PropTypes from "prop-types"

function Student(props){
    
    return(
        <div className="student-box">
            <h1>{props.name}</h1>
            <p>gpa: {props.gpa}</p>
            <p>age: {props.age}</p>
            <p>student: {props.isStudent ? "yes" : "no"}</p>
        </div>
    );
}


// na debuggovanie v konzoly ked zadas zly typ napr age bude string tak ti da warning v konzoly ale program pojde bez zmeny
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    gpa: PropTypes.string,
    isStudent: PropTypes.bool 
}

// default props ked nezadam do app.js klucove hodnoty pre danu hodnotu
Student.defaultProps = {
    name: "Guest",
    age: 0,
    gpa: 0,
    isStudent: false
}

export default Student