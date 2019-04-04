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
                        <div className="col-8">
                            <h4>---------------------------------</h4>
                            <p>{this.state.OneAuthor.street}</p>
                            <p>{this.state.OneAuthor.city}</p>
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