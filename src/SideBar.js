import React, { Component } from "react";
import "./App.css";
import userAvatar from "./img/user.png";

class SideBar extends Component {
  render() {
    return (
      <div className="col-lg-4 side-bar card">
        <img
          className="user-avatar card-img-top rounded-circle"
          src={userAvatar}
          alt={this.props.user.name}
        />
        <div className="card-body">
          <div className="card-title text-center">
            <h3>
              <strong>{this.props.user.name}</strong>
            </h3>
            <h6 className="text-muted">{this.props.user.username}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
