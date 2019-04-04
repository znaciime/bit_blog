import React from "react"
import { Link } from "react-router-dom"

class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container">
                <div className="row top">
                    <div className="col-6">BIT BLOG</div>
                    <div className="col-6 topright">
                        <Link to="/" ><b>Home</b></Link>
                        <Link to="/Authors" ><b>Authors</b></Link>
                        <Link to="/About" ><b>About</b></Link>
                    </div>
                </div>
            </div>

        )
    }
}
export default Header;