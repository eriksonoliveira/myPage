import React, { Component } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import TweetBox from "./TweetBox";
import "./App.css";

//App component
class App extends Component {
  render() {
    let user = {
      name: "User",
      username: "@user_name"
    };

    return (
      <div className="app bg-grey">
        <Header user={user} />
        <div className="container">
          <div className="row">
            <SideBar user={user} />
            <TweetBox user={user} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
