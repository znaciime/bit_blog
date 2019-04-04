import React from 'react'
import PostList from '../pages/PostsList'
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import SinglePost from '../pages/SinglePost';
import About from './About';
import Authors from '../pages/Authors'
import SingleAuthor from '../pages/SingleAuthor'


class Main extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-10">

                            <Switch>
                                <Route path='/SingleAuthor/:numberz' component={SingleAuthor} />
                                <Route path='/Authors' component={Authors} />
                                <Route path='/About' component={About} />
                                <Route path='/SinglePost/:broj' component={SinglePost} />
                                <Route exact path='/' component={PostList} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </>)
    }


}
export default Main;