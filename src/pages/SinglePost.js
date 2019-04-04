import React from 'react';
import { fetchPost } from '../services/postService';
import { Link } from "react-router-dom"

class SinglePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {},
        }
    }

    componentDidMount() {
        fetchPost(this.props.match.params.broj)
            .then(post => this.setState({ post }))
    }


    render() {

        return (
            <>

                <div className="row singlepost" >
                    <div className="col-2"></div>
                    <div className="col-8">  <p>id: {this.state.post.id}</p>
                        <Link to={`/SingleAuthor/:num`}>Author Name</Link>
                        <p>Title: {this.state.post.title}</p>
                        <p>{this.state.post.body}</p></div>
                    <div className="col-2"></div>

                </div >
            </>
        )
    }
}
export default SinglePost;