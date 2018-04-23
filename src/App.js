import React, { Component } from "react";
import SideBar from "./SideBar";
import "./App.css";

//App component
class App extends Component {
  render() {
    let user = {
      name: "User"
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

//Navbar Component
class Header extends Component {
  render() {
    return (
      <div className="clearfix">
        <nav className="navbar navbar-expand-lg navbar-light bg-blue">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand">Twitter</a>
            </div>
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <a>
                  <span className="glyphicon glyphicon-user" />{" "}
                  {this.props.user.name}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

//Tweet box component
class TweetBox extends Component {
  constructor(props) {
    super();

    this.state = {
      text: "",
      tweets: ["Hello World!"]
    };

    this.handleType = this.handleType.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  //<button> is enabled when user types in textarea
  //On input, the event is triggered and the
  //state is updated
  handleType(event) {
    let s = this.state;
    s.text = event.target.value;
    this.setState(s);
  }

  handleClick() {
    let tweetsList = this.state.tweets;
    if (this.state.text.length > 0) {
      tweetsList.unshift(this.state.text);

      this.setState({
        tweets: tweetsList
      });
    }
  }

  render() {
    return (
      <div className="col-lg-8 float-right tweet-box">
        <textarea
          onInput={this.handleType}
          className="form-control tweet-box-text"
        />
        <br />
        <button
          className="btn btn-primary float-sm-right tweet-box-btn"
          disabled={this.state.text.length === 0}
          onClick={this.handleClick}
        >
          Tweet
        </button>
        <div className="char-count float-sm-left">
          {140 - this.state.text.length}
        </div>
        <br />

        <TweetsList tweets={this.state.tweets} user={this.props.user} />
      </div>
    );
  }
}

class TweetsList extends Component {
  render() {
    //Creates tweets list
    let tweets = this.props.tweets.map(tweet => {
      return (
        <li className="list-group-item tweets-list-item">
          <p className="color-blue">
            <strong>{this.props.user.name}</strong>
          </p>
          <p>{tweet}</p>
        </li>
      );
    });

    return (
      <div className="tweets-list">
        <ul className="list-group">{tweets}</ul>
      </div>
    );
  }
}

export default App;
