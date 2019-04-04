import React from 'react'
import { Link } from 'react-router-dom';
import { fetchAuthors } from '../services/postService';

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            AuthorList: []
        }

    }
    componentDidMount() {
        fetchAuthors()
            .then((mapedAuthors) => {
                this.setState({
                    AuthorList: mapedAuthors
                })
            })
    }



    render() {
        const allAuthors = this.state.AuthorList.map((element) => {
            return (

                <div className="container " key={element.id}>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-10 "><Link className="howerauthor" to={`/SingleAuthor/${element.id}`}>{element.name}</Link></div>

                    </div>
                    <hr />
                </div>







            )

        })
        return allAuthors;
    }


}
export default Authors;