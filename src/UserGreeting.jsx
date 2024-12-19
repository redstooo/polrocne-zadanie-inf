import PropTypes from "prop-types"

function UserGreeting(props){

    const logged = <h2 className="logged">Welcome {props.username}</h2>

    const notLogged = <h2 className="notLogged">Please log in to continue</h2>


    return(props.isLoggedIn ? logged : notLogged);
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting