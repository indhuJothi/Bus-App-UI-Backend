import React from "react";
import "./logreg.css";
import validateLogin from "../service/service";
import { getPassword } from "../service/service";
import { getMobile } from "../service/service";
import { getUsername } from "../service/service";
import { getUseremail } from "../service/service";
import axios from "axios";
let userName, userEmail;
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: " ",
      password: " ",
      boolean: false,
      logform: true,
      showapp: this.props.prop,
      res: false,
      mobileerr: "",
      passerr: "",
      username: " ",
      useremail: " ",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange(event) {
    const mobile = event.target.name;
    const password = event.target.password;
    this.setState({
      [mobile]: event.target.value,
      [password]: event.target.value,
    });
  }

  submit(e) {
    let result, password, mobile, name, email;
    e.preventDefault();
    result = validateLogin(this.state.mobile, this.state.password);
    if (result) {
      this.setState({
        res: true,
      });
    }
    name = getUsername(this.state.mobile);
    password = getPassword(this.state.mobile, this.state.password);
    email = getUseremail(this.state.mobile);
    localStorage.setItem("mobile", this.state.mobile);
    localStorage.setItem("name", name);
    // localStorage.setItem('password',btoa(this.state.password))
    localStorage.setItem("email", email);

    if (password != this.state.password) {
      this.setState({
        passerr: "Enter a valid password",
      });
    }
    mobile = getMobile(this.state.mobile, this.state.password);
    if (mobile != this.state.mobile) {
      this.setState({
        mobileerr: "Enter a valid mobile number",
      });
    }
    let newUserDetails = {
      mobile: this.state.mobile,
      password: this.state.password,
    };
    this.loginUser(newUserDetails)
      .then((response) => response.data)
      .then((data) => {
        let { token } = data;
        sessionStorage.setItem("authToken", token);
        this.props.history.push("/search");
      });
    console.log(newUserDetails);
  }
  loginUser(newUserDetails) {
    let apiUrl = "http://localhost:5000/users/login";
    return axios.post(apiUrl, newUserDetails, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  // componentDidMount() {
  //   this.documentData = [
  //     localStorage.getItem("mobile"),
  //     localStorage.getItem("password"),
  //   ];

  //   if (localStorage.getItem("document")) {
  //     this.setState({
  //       mobile: this.documentData.mobile,
  //       password: this.documentData.password,
  // //     });
  //   } else {
  //     this.setState({
  //       title: "",
  //       description: "",
  //       price: "",
  //     });
  //   }
  // }
  render() {
    let hideapp = this.props.prop;
    let getuser = this.props.getuser;
    let getuserpass = this.props.getuserpass;
    userName = getUsername(this.state.mobile);
    userEmail = getUseremail(this.state.mobile);

    let res = this.state.res;

    return (
      <div>
        <form method="/post" onSubmit={this.submit}>
          <div className="base-container">
            <div className="formheader">Login</div>
            <div className="form">
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
                  placeholder="password"
                  onChange={this.handleChange}
                />
                <div class="error">{this.state.passerr}</div>
              </div>
            </div>
            <div>
              <input type="submit" class="submitbtn"></input>
            </div>
          </div>
        </form>
        {res ? hideapp(false) : null}
        {res ? getuser(this.state.mobile, userName, userEmail) : null}
        {res
          ? getuserpass(
              this.state.password,
              userName,
              userEmail,
              this.state.mobile,
              this.state.password
            )
          : null}
      </div>
    );
  }
}
