import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// Components
import AddAuthorCard from "./AddAuthorCard";
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

class AuthorsList extends Component {
  state = {
    query: ""
  };

  setQuery = query => this.setState({ query });

  filterAuthors = () => {
    const query = this.state.query.toLowerCase();
    return this.props.authors.filter(author => {
      return `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(query);
    });
  };

  render() {
    if (!this.props.user) return <Redirect to="/login" />;
    const authorCards = this.filterAuthors().map(author => (
      <AuthorCard key={author.id} author={author} />
    ));

    return (
      //CANT SEE AUTHORS IF THEY ARE NOT SIGNED IN
      <div className="authors">
        <h3>Authors</h3>
        <SearchBar onChange={this.setQuery} />
        {this.props.user && (
          <div className="row">
            <AddAuthorCard />
            {authorCards}
          </div>
        )}
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.rootAuthors.authors,
    user: state.user
  };
};

export default connect(mapStateToProps)(AuthorsList);
