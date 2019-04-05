import React from "react"
import { Link } from "react-router-dom"

class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container top">
                <div className="row">
                    <div className="col-6"><h5>BIT BLOG</h5></div>
                    <div className="col-6 topright">
                        <Link to="/SubmitPage"><b>Create Post</b></Link>
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