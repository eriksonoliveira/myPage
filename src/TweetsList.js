import React, { Component } from "react";
import userAvatar from "./img/user.png";

class TweetsList extends Component {
  render() {
    //Creates tweets list
    let tweets = this.props.tweets.map(tweet => {
      return (
        <li className="list-group-item tweets-list-item">
          <div className="media ">
            <img
              className="mr-3 rounded-circle"
              src={userAvatar}
              alt={this.props.user.name}
            />
            <p className="media-body mb-0">
              <h6 className="mt-0 mb-1 color-blue">
                <strong>{this.props.user.name}</strong>
              </h6>
              <p>{tweet}</p>
            </p>
          </div>
        </li>
      );
    });

    return (
      <div className="tweets-list">
        <ul className="list-group">
          <li className="list-group-item">
            <h5>
              <strong>Tweets</strong>
            </h5>
          </li>
          {tweets}
        </ul>
      </div>
    );
  }
}

export default TweetsList;
