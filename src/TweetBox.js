import React, { Component } from "react";
import TweetsList from "./TweetsList";

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

export default TweetBox;
