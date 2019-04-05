import React from 'react'
import { Link } from 'react-router-dom';

import { fetchPost, fetchPosts } from '../services/postService';

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: [],
        }



    }
    componentDidMount() {
        fetchPosts()
            .then((MapedPosts) => {
                console.log(MapedPosts);
                this.setState({
                    postList: MapedPosts,
                })
            })

    }




    render() {
        const renderedPosts = this.state.postList.map((element) => {

            return (


                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8"> <div className="Main back" key={element.id}>
                        <p>id: {element.id}</p>
                        <Link to={`/SinglePost/${element.id}`}>Title: {element.title}</Link>
                        <hr />
                    </div></div>
                    <div className="col-2"></div>

                </div>



            )
        })
        return renderedPosts;
    }


}
export default PostList;