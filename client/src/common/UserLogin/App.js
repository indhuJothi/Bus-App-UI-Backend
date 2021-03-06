import React from "react";
import "./logreg.css";
import { SignUp } from "./index";
import { Login } from "./login";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import logo from "../../signlogo.jpg";
import "../main.css";
import SweetAlert from "react-bootstrap-sweetalert";
import Main from "../main";

let mobileNo, pass, userName;
class App extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        isLogin: true,
        hideapp: true,
        mobileno: " ",
        pass: " ",
        username: " ",
        useremail: " ",
        alert:null
      };
      this.handle = this.handle.bind(this);
      this.handleSignup = this.handleSignup.bind(this);
      this.showApp = this.showApp.bind(this);
      this.getUsermobile = this.getUsermobile.bind(this);
      this.getUserpass = this.getUserpass.bind(this);
      this.redirectLogin =this.redirectLogin.bind(this)
    }
  }

  showApp(value) {
    this.setState({
      hideapp: value,
    });
  }
  getUsermobile(val, val1, val3) {
    this.setState({
      mobileno: val,
      username: val1,
      useremail: val3,
    });
  }
  getUserpass(val,val1,val2,val3) {
    this.setState({
      pass: val,
      userName:val1,
      useremail:val2,
      mobileNo:val3
    });
    // let newUserDetails={
    //   mobile:this.state.mobile,
    //   password:this.state.password
    //    }
    // this.loginUser(newUserDetails)
    //        .then(response => response.data)
    //        .then(data => {
    //         let { token } = data
    //         sessionStorage.setItem('authToken', token)
    //         this.props.history.push('/search')
    //     })
       
  }
//   loginUser(newUserDetails)
//   {
//     let apiUrl = 'http://localhost:5000/users/login'
//     return axios.post(apiUrl,newUserDetails,{
//         headers:{
//             'Content-Type': 'application/json'
//         }
//     })
// }
  handle() {
    this.setState({
      isLogin: true,
    });
  }
  handleSignup(e) {
    e.preventDefault();
    this.setState({
      isLogin: false,
    });
  }
  redirectLogin(val){
    const getAlert = () => (
      <SweetAlert
        success
        title="!"
        onConfirm={() => this.hideAlert()}
      >
        You are signed in successfully
        <p>You can now Login</p>
      </SweetAlert>
    );
    
    if(val)
    {
      this.setState({
        isLogin:true,
        alert:getAlert()
      })
    }
  }
  hideAlert() {
    console.log("Hiding alert...");
    this.setState({
      alert: null
    });
  }
  componentDidMount() {
    this.setState({
      user: {
        userid: this.state.mobile,
        pass: this.state.pass,
      },
    });
  }
  render() {
    const isLogin = this.state.isLogin;
    const showApp = this.showApp;
    const hideapp = this.state.hideapp;
    const isuserlogin = this.props.isuserlogin;
    const isuserpass = this.props.isuserpass;
    const isusername = this.props.isusername;
    const isuseremail = this.props.isuseremail;
    const getUsermobile = this.getUsermobile;
    const getUserpass = this.getUserpass;
    const redirectLogin = this.redirectLogin;
    userName = this.state.username;
    mobileNo = this.state.mobileno;
    pass = this.state.pass;
    console.log(pass);
    let useremail = this.state.useremail;

    return (
      <div>
        <form method="/post" class="MainContainer center">
          <button onClick={this.handle} class="button">
            Login
          </button>
          <button onClick={this.handleSignup} class="button">
            Signup
          </button>
          <div>
            {isLogin ? (
              <Login
                prop={showApp.bind(this)}
                getuser={getUsermobile.bind(this)}
                getuserpass={this.getUserpass.bind(this)}
              />
            ) : (
              <SignUp redirectLogin={redirectLogin.bind(this)}  />
            )}
          </div>
        </form>
        {/* {hideapp? null:isuserlogin(mobileNo)}
    //  {hideapp? null:isuserpass(pass)}
     {hideapp? null:isusername(userName)}
     {hideapp? null:isuseremail(useremail)} */}
        {hideapp? null:isuserpass(pass,userName,useremail,mobileNo)}
        {this.state.alert}
        {hideapp ? null : <Redirect to="/search"></Redirect>}
      </div>
    );
  }
}

export default App;
