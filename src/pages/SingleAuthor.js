import React from 'react'
import { Link } from 'react-router-dom';
import { fetchOneAuthor } from '../services/postService'

class SingleAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            OneAuthor: {}
        }

    }
    componentDidMount() {
        fetchOneAuthor(this.props.match.params.numberz)
            .then((mapedAuthor) => {
                this.setState({
                    OneAuthor: mapedAuthor
                })
            })
    }



    render() {

        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-4"><p>Author Name:</p>
                            <p>Email:</p></div>
                        <div className="col-8">

                            <p>{this.state.OneAuthor.name}</p>
                            <p>{this.state.OneAuthor.email}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-4"> <h4>Adress</h4>
                            <p>Street:</p>
                            <p>City:</p></div>
                        <div className="col-4">
                            <p></p>
                            <p>{this.state.OneAuthor.street}</p>
                            <p>{this.state.OneAuthor.city}</p>
                        </div>
                        <div className="col-4">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11322.276626337698!2d20.4580218!3d44.8099684!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1554472128173!5m2!1sen!2srs" width="400" height="300" frameBorder="0" style={{ border: "0" }} allowFullScreen></iframe>
                        </div>


                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-4"><h5>Company:</h5></div>
                        <div className="col-8"><p>{this.state.OneAuthor.company}</p></div>

                    </div>

                </div>
            </>)



    }


}
export default SingleAuthor;