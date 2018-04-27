import React, { Component } from "react";

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

export default Header;
