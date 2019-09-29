import React, { Component } from "react";
import { NavLink, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "./redux/actions";
// Logo
import logo from "./assets/theindex.svg";

class Sidebar extends Component {
  render() {
    if (!this.props.user)
      return (
        <div id="sidebar">
          <img src={logo} className="logo" alt="the index logo" />
          <section></section>
          <Redirect to="/login" />;
        </div>
      );
    return (
      <div id="sidebar">
        <img src={logo} className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <NavLink to="/authors">AUTHORS</NavLink>
          </h4>
        </section>
        <div className="fixed-bottom mb-5 ml-5">
          {this.props.user && (
            <button className="btn btn-danger" onClick={this.props.logout}>
              Logout {this.props.user.username}
            </button>
          )}

          {!this.props.user && (
            <div className="fixed-bottom">
              <Link to="/login" className="btn btn-info m-2 float-left">
                Login
              </Link>
              <Link to="/signup" className="btn btn-success m-2 float-left">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
