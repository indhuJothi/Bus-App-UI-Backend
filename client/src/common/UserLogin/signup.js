// import React from "react";
// import "./logreg.css";
// import data from "../../user.json";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect,
// } from "react-router-dom";
// import SweetAlert from "react-bootstrap-sweetalert";
// import { withRouter } from "react-router";
// import PrivateRoute from "../private";

// let pushData;
// export class SignUp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username:" ",
//       email: "",
//       mobile: "",
//       password: " ",
//       confirmpassword: " ",
//       usernameErr:" ",
//       emailerr: "",
//       passerr: "",
//       mobileerr: "",
//       confirmpasserr: "",
//       res: true,
//       alert: null,
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     const username=event.target.username
//     const mobile = event.target.name;
//     const password = event.target.password;
//     const email = event.target.email;
//     const confirmpassword = event.target.confirmpassword;
//     this.setState({
//       [username]:event.target.value,
//       [email]: event.target.value,
//       [mobile]: event.target.value,
//       [password]: event.target.value,
//       [confirmpassword]: event.target.value,
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();

//     let emailres = true;
//     let mobileres = true;
//     let passwordres = true;
//     let confirmpassres = true;
//     let usernameres=true
//     let nameregex = /^[a-zA-Z\s]{3,15}$/
//     let emailregex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z.]+$/;
//     let mobileregex = /^[6-9]\d{9}$/;
//     let passregex = /^[A-Za-z0-9@\s]{3,15}$/;
//     if(this.state.username===" ")
//     {
//       usernameres = true
//       this.setState({
//         usernameErr:"Please Enter Your User Name"
//       })
//     }
//     else
//     { if(nameregex.test(this.state.name))
//     {
//       usernameres=false
//       this.setState({
//         usernameErr:" "
//       })
//     }
//     else{
//       usernameres=true
//       this.setState({
//         usernameErr:"User Name Must Be between 3-15 Charachters"
//       })
//     }
//   }

//     if (emailregex.test(this.state.email)) {
//       emailres = false;
//       this.setState({
//         emailerr:" "
//       })
//     } else {
//       emailres = true;
//       this.setState({
//         emailerr: "Enter a valid email",
//       });
//     }
//     if (mobileregex.test(this.state.mobile)) {
//       mobileres = false;
//       this.setState({
//         mobileerr:" "
//       })
//     } else {
//       mobileres = true;
//       this.setState({
//         mobileerr: "Enter a valid mobile",
//       });
//     }
//     if (passregex.test(this.state.password)) {
//       passwordres = false;
//       this.setState({
//         passerr:" "
//       })
//     } else {
//       passwordres = true;
//       this.setState({
//         passerr: "Enter a valid password",
//       });
//     }
//     if(this.state.confirmpassword===" ")
//     {
//       confirmpassres=true
//       this.setState({
//         confirmpasserr:"Please Enter Your Password"
//       })
//     }
//     else if (this.state.password === this.state.confirmpassword) {
//       confirmpassres = false;
//       this.setState({
//         confirmpasserr:" "
//       })
//     }
   
//     else{
//       confirmpassres = true;
//       this.setState({
//         confirmpasserr: "password are not same",
//       });
//     } 
    
    
//     if((usernameres||emailres||mobileres||passwordres||confirmpassres) ===false) {
//     this.setState({
//         res: false
//       });
     
      
//     }
//   }

//   componentDidUpdate() {
//     pushData = {
//       email: this.state.email,
//       mobile: parseInt(this.state.mobile),
//       password: this.state.password,
//       name: this.state.username,
//     };
//     data.user.push(pushData);
//     console.log(data);
//   }

//   render() {
//     let res = this.state.res;
//     let redirectLogin=this.props.redirectLogin
    
//     console.log(data);
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <div className="base-container">
//             <div className="formheader">Signup</div>
//             <div className="form">
//             <div>
//                 <label htmlFor="email">User Name</label>
//                 <input
//                   type="text"
//                   name="username"
//                   placeholder="UserName"
//                   onChange={this.handleChange}
//                 />
//                 <div class="error">{this.state.usernameErr}</div>
//               </div>
//               <div>
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="text"
//                   name="email"
//                   placeholder="xyz@domain.com"
//                   onChange={this.handleChange}
//                 />
//                 <div class="error">{this.state.emailerr}</div>
//               </div>
//               <div>
//                 <label htmlFor="Mobile">Mobile</label>
//                 <input
//                   type="text"
//                   name="mobile"
//                   placeholder="MobileNo"
//                   onChange={this.handleChange}
//                 />
//                 <div class="error">{this.state.mobileerr}</div>
//               </div>
//               <div>
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   onChange={this.handleChange}
//                 />
//                 <div class="error">{this.state.passerr}</div>
//               </div>
//               <div>
//                 <label htmlFor="confirmpassword">Password</label>
//                 <input
//                   type="password"
//                   name="confirmpassword"
//                   placeholder="confirm password"
//                   onChange={this.handleChange}
//                 />
//                 <div class="error">{this.state.confirmpasserr}</div>
//               </div>
//             </div>
//             <div>
//               <input type="submit" class="submitbtn"></input>
//             </div>
//           </div>
//         </form>
//         {this.state.alert}
//         {res?null:redirectLogin(true)}
//       </div>
//     );
//   }
// }




import React from "react";
import "./logreg.css";
import data from "../../user.json";
import { registerUser } from "../../api";
import axios from "axios"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import { withRouter } from "react-router";
import PrivateRoute from "../private";

let pushData;
export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:" ",
      email: "",
      mobile: "",
      password: " ",
      confirmpassword: " ",
      usernameErr:" ",
      emailerr: "",
      passerr: "",
      mobileerr: "",
      confirmpasserr: "",
      res: true,
      alert: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const username=event.target.username
    const mobile = event.target.name;
    const password = event.target.password;
    const email = event.target.email;
    const confirmpassword = event.target.confirmpassword;
    this.setState({
      [username]:event.target.value,
      [email]: event.target.value,
      [mobile]: event.target.value,
      [password]: event.target.value,
      [confirmpassword]: event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let emailres = true;
    let mobileres = true;
    let passwordres = true;
    let confirmpassres = true;
    let usernameres=true
    let nameregex = /^[a-zA-Z\s]{3,15}$/
    let emailregex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z.]+$/;
    let mobileregex = /^[6-9]\d{9}$/;
    let passregex = /^[A-Za-z0-9@\s]{3,15}$/;
    if(this.state.username===" ")
    {
      usernameres = true
      this.setState({
        usernameErr:"Please Enter Your User Name"
      })
    }
    else
    { if(nameregex.test(this.state.name))
    {
      usernameres=false
      this.setState({
        usernameErr:" "
      })
    }
    else{
      usernameres=true
      this.setState({
        usernameErr:"User Name Must Be between 3-15 Charachters"
      })
    }
  }

    if (emailregex.test(this.state.email)) {
      emailres = false;
      this.setState({
        emailerr:" "
      })
    } else {
      emailres = true;
      this.setState({
        emailerr: "Enter a valid email",
      });
    }
    if (mobileregex.test(this.state.mobile)) {
      mobileres = false;
      this.setState({
        mobileerr:" "
      })
    } else {
      mobileres = true;
      this.setState({
        mobileerr: "Enter a valid mobile",
      });
    }
    if (passregex.test(this.state.password)) {
      passwordres = false;
      this.setState({
        passerr:" "
      })
    } else {
      passwordres = true;
      this.setState({
        passerr: "Enter a valid password",
      });
    }
    if(this.state.confirmpassword===" ")
    {
      confirmpassres=true
      this.setState({
        confirmpasserr:"Please Enter Your Password"
      })
    }
    else if (this.state.password === this.state.confirmpassword) {
      confirmpassres = false;
      this.setState({
        confirmpasserr:" "
      })
    }
   
    else{
      confirmpassres = true;
      this.setState({
        confirmpasserr: "password are not same",
      });
    } 
    
    
    if((usernameres||emailres||mobileres||passwordres||confirmpassres) ===false) {
     e.preventDefault()
      this.setState({
        res: false
      });
      const newUser ={
        name:this.state.username,
        email:this.state.email,
        mobile:this.state.mobile,
        password:this.state.password
        }
   
        this.registerUser(newUser)
        .then(response => response.data)
         console.log(newUser)
  
           }
      
    }
  
  registerUser(newUserDetails){
    let apiUrl = 'http://localhost:5000/users/register'
    return axios.post(apiUrl,newUserDetails,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}

//   componentDidUpdate() {
//     pushData = {
//       email: this.state.email,
//       mobile: parseInt(this.state.mobile),
//       password: this.state.password,
//       name: this.state.username,
//     };
//     data.user.push(pushData);
//     console.log(data);
//   }

  render() {
    let res = this.state.res;
    let redirectLogin=this.props.redirectLogin
    
    console.log(data);
    return (
      <div>
        <form method='/post' onSubmit={this.handleSubmit}>
          <div className="base-container">
            <div className="formheader">Signup</div>
            <div className="form">
            <div>
                <label htmlFor="email">User Name</label>
                <input
                  type="text"
                  name="username"
                  placeholder="UserName"
                  onChange={this.handleChange}
                />
                <div class="error">{this.state.usernameErr}</div>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="xyz@domain.com"
                  onChange={this.handleChange}
                />
                <div class="error">{this.state.emailerr}</div>
              </div>
              <div>
                <label htmlFor="Mobile">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="MobileNo"
                  onChange={this.handleChange}
                />
                <div class="error">{this.state.mobileerr}</div>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <div class="error">{this.state.passerr}</div>
              </div>
              <div>
                <label htmlFor="confirmpassword">Password</label>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="confirm password"
                  onChange={this.handleChange}
                />
                <div class="error">{this.state.confirmpasserr}</div>
              </div>
            </div>
            <div>
              <input type="submit" class="submitbtn"></input>
            </div>
          </div>
        </form>
        {this.state.alert}
        {res?null:redirectLogin(true)}
      </div>
    );
  }
}
