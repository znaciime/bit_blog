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
                <div className="container ">
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
                        <div className="col-3"> <h4>Adress</h4>
                            <p>Street: {this.state.OneAuthor.street}</p>
                            <p>City: {this.state.OneAuthor.city}</p></div>
                        <div className="col-3">
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                        <div className="col-6">
                            <iframe src={`https://www.google.com/maps?q=` + `${this.state.OneAuthor.geolat}` + `,` + `${this.state.OneAuthor.geolng}` + `&output=embed`} width="400" height="300" frameBorder="0" style={{ border: "0" }} allowFullScreen></iframe>
                        </div>


                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-4"><h5>Company:</h5></div>
                        <div className="col-8"><p>{this.state.OneAuthor.company}</p>
                            <p>Zipcode:{this.state.OneAuthor.zipcode}</p>
                        </div>

                    </div>

                </div>
            </>)



    }


}
export default SingleAuthor;