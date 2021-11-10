import React, { Component } from "react";

import axios from "axios"
export default class Login extends Component {

constructor(props) {
  super(props);
  this.state={
    username:"",
    password:"",
  }
}
isChangeData = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  // console.log(name);
  // console.log(value);
  this.setState({ [name]: value });
}

 handleSubmit = (event) => {
  event.preventDefault();

  var user= {
    username: this.state.username,
    password: this.state.password,
  }
  axios
  .post(`http://localhost:3000/api/login`, user, {
    headers: {
      "Content-type": "application/json",
    },
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
};
  render() {
    return (
      <div className="login_main">
  <img src="./image/Login/bgLogin.jpeg" alt="" className="img_login" />
  <div id="login">
    <img src="./image/Login/user2.png" alt="" className="user_login" />
    <form action>
      <h1 className="Login_here">Login Here</h1>
      <label className="label_login">Username</label><br />
      <input type="text" className="text_login" name="username" placeholder="Enter username"     onChange={(event) => {
                  this.isChangeData(event);
                }}/> <br />
      <label className="label_login">Password</label><br />
      <input type="password" className="text_login" name="password" placeholder="Enter password"    onChange={(event) => {
                  this.isChangeData(event);
                }}/> <br />
      <input type="button" defaultValue="Login" className="submit_login" onClick={this.handleSubmit} /> <br />
    </form>
  </div>
</div>

    
    )
  }
}


