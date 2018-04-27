import React, { Component } from "react";
import userAvatar from "./img/user.png";

class TweetsList extends Component {
  render() {
    //Creates tweets list
    let tweets = this.props.tweets.map(tweet => {
      return (
        <li className="list-group-item tweets-list-item mb-1">
          <div className="media ">
            <img
              className="mr-3 rounded-circle"
              src={userAvatar}
              alt={this.props.user.name}
            />
            <p className="media-body mb-0">
              <h5 className="mt-0 mb-1 color-blue">
                <strong>{this.props.user.name}</strong>
              </h5>
              <p>{tweet}</p>
            </p>
          </div>
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

export default TweetsList;
