import React from "react"
import { Link } from "react-router-dom";
import { sendData } from '../services/postService';

class SubmitPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTitle: "",
            inputPost: "",
        }
    }
    OnButtonClick = (e) => {
        e.preventDefault()
        sendData(this.state.inputTitle, this.state.inputPost).then(() => {
            this.props.history.push('/')
        })
    }
    handleChange = (event) => {
        this.setState({
            inputTitle: event.target.value,

        })
        console.log(event.target.value)


    }
    handleChange2 = (event) => {
        this.setState({
            inputPost: event.target.value,
        })
        console.log(event.target.value)

    }


    render() {
        return (
            <div className="container back">
                <div className="row ">
                    <div className='col-4'></div>
                    <div className='col-4'><h1>NEW POST</h1></div>
                    <div className='col-4'></div>
                </div>


                <form onSubmit={this.OnButtonClick}>
                    <div className='col-12'>  <p><b>Title</b></p>
                        <input value={this.state.inputTitle} onChange={this.handleChange} type="text" placeholder="Set title" width="100%"></input>
                    </div>





                    <div className="col-12">
                        <p><b>Content</b> </p>
                        <textarea value={this.state.inputPost} onChange={this.handleChange2} placeholder="Enter your post" width="100%" ></textarea>
                    </div>
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4"></div>
                        <div className="col-4">

                            <Link to="/"   ><button type="reset">Cancel</button></Link>
                            <button type="submit">Save</button>
                        </div>

                    </div>


                </form>

            </div>

        )
    }
}
export default SubmitPage;