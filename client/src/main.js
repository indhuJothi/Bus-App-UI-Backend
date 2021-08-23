import React from "react";
// import { response } from "../../server/app";
import RouteTable from "./common/routeprocess";

let userloggedin;
class Page extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        userloggedin: false,
        // apiResponse:" "
      };

    }
    this.isuserlogin = this.isuserlogin.bind(this);
  }
  // callAPI = async ()=>{
  //   const api =await fetch('/testAPI')
  //   const body=await response.json()
  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;

  // }
  isuserlogin(value) {
    userloggedin = value;

    console.log(value);
  }
  // componentDidMount()
  // {
  //   this.callAPI()
  //       .then(res=>this.setState({apiResponse: res.express}))
  //       .catch(err=>console.log(err))
  // }

  render() {
    let isuserlogin = this.isuserlogin;

    return (
      <>
        {/* <p>{this.state.apiResponse}</p> */}
        <RouteTable isuserlogin={isuserlogin.bind(this)} />
        
      </>
    );
  }
}

export default Page;
