import React, { Component } from 'react';
import axios from 'axios';
import  "./Post.css";

class PostForm  extends Component{
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }
    

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (d) => {
        d.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3000/admin', this.state)
    }


    render(){
        const {userId, title, body} = this.state
        console.log("Hallo");
        return (
            <div className="Mitte">
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input  type="text" name="userId" value={userId} onChange={this.changeHandler}/>
                    </div>

                    <div>
                        <input  type="text" name="title" value={title} onChange={this.changeHandler}/>
                    </div>

                    <div>
                        <input  type="text" name="body" value={body} onChange={this.changeHandler}/>
                    </div>

                    <button  className="Submit"type="submit" > 
                Submit
            </button>

                </form>


            
            
            </div>
        )

    }
}







export default PostForm;