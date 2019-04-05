import React from 'react'
import PostList from '../pages/PostsList'
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import SinglePost from '../pages/SinglePost';
import About from './About';
import Authors from '../pages/Authors'
import SingleAuthor from '../pages/SingleAuthor';
import SubmitPage from '../pages/SubmitPage';



class Main extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <>


                <Switch>

                    <Route path='/SingleAuthor/:numberz' component={SingleAuthor} />
                    <Route path='/Authors' component={Authors} />
                    <Route path='/About' component={About} />
                    <Route path='/SinglePost/:postId' component={SinglePost} />
                    <Route path='/SubmitPage/' component={SubmitPage} />
                    <Route exact path='/' component={PostList} />
                </Switch>

            </>)
    }


}
export default Main;