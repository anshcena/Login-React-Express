import React, { Component } from "react";
import "./Login.css";
//const FormData = require('form-data');
 
const InitialState = {
  username: "",
  password: "",
}

class Login extends Component {

  constructor(props) {
    super(props);
    this.state=InitialState;
  }

  // showMessage(title, message) {
  //   confirmAlert({
  //     title: title,
  //     closeOnClickOutside: false,
  //     message: message,
  //     buttons: [
  //       {
  //         label: 'Ok',
  //       },
  //     ]
  //   });
  // }
 

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.username);
    console.log(this.state.password);
    if (this.state.username === '') {
      alert("Username is empty");
      return;
    }
    if (this.state.password === '') {
      alert("Please enter a password.");
      return;
    }

  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  

  render() {
    return (
        <div>
             <div className="wrapper-page">
             <div className="card">
             <div className="card-body">
             <h3 className="text-center m-0">
                <a className="logo logo-admin" href="/">
                  <img alt="" height="80" src="/assets/TCH.jpg"/>
                </a>
              </h3>
            
             <form onSubmit={this.handleSubmit} className="form-horizontal m-t-30">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input id="username" onChange={this.handleChange} defaultValue={this.state.username} className="form-control" placeholder="Enter username" type="text"/>
                </div>

                <div className="form-group">
                  <label htmlFor="userpassword">Password</label>
                  <input id="password" onChange={this.handleChange} defaultValue={this.state.password} className="form-control" placeholder="Enter password" type="password" />
                </div>
                
                <div className="form-group row m-t-20">                                                 
                    <div className="col-12 text-right">
                      <button className="button-colour" type="submit">Log In</button>
                    </div>
                  </div>
              </form>
             </div>
             </div>
             </div>
        </div>
        );
    }
}

export default Login;