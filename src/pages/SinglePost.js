import React from 'react';
import { fetchPost } from '../services/postService';
import { Link } from "react-router-dom"
import { fetchPostperAuthor } from '../services/postService';


class SinglePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {},
            morePosts: [],
        }
    }

    componentDidMount() {
        this.SendingFetch()

        console.log(this.state.post)
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.postId !== this.props.match.params.postId) {
            this.SendingFetch()
        }
    }
    SendingFetch = () => {
        fetchPost(this.props.match.params.postId)
            .then(post => {
                this.setState({ post })

                const authorId = post.user
                fetchPostperAuthor(authorId)
                    .then((morePosts1) => {
                        this.setState({
                            morePosts: morePosts1,
                        })

                    })
            });

    }


    render() {

        return (
            <div className="container">

                <div className="row singlepost" >
                    <div className="col-2"></div>
                    <div className="col-8">  <p>id: {this.state.post.id}</p>
                        <Link to={`/SingleAuthor/${this.state.post.user}`}>Author Name</Link>
                        <p>Title: {this.state.post.title}</p>
                        <p>{this.state.post.body}</p></div>
                    <div className="col-2"></div>


                </div >
                <div className="row">
                    <div className="col-12">
                        <p><b>{this.state.morePosts.length} more posts from this author</b></p>
                        {this.state.morePosts.map((element) => {
                            return <p><Link to={`/SinglePost/${element.id}`}>Title: {element.title}</Link></p>


                        })}
                    </div>
                </div>

            </div>
        )
    }
}
export default SinglePost;