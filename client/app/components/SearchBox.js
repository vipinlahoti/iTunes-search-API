import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchSuggestions from './SearchSuggestions';
import { fetchSearch } from '../redux/actions';

class SearchBox extends Component {
  state = {
    query: '',
    showSuggestions: true
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        this.getInfo();
        this.setState({
          showSuggestions: true
        });
      }
    })
  }

  handleClearForm = () => {
    this.setState({
      showSuggestions: false
    });
  }

  getInfo = () => {
    this.props.fetchSearch(this.state.query);
  }

  render() {
    const { searchList } = this.props;
    const { showSuggestions, query } = this.state;

    return (
      <div className="search__wrapper">
        <div className="search__wrapper-form">
          <input
            placeholder="Start searching.."
            className="search__wrapper-box"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />

          {query && searchList.length && showSuggestions ? (
            <button
              className="search__wrapper-clear"
              onClick={this.handleClearForm}>X</button>
            ) : null }
        </div>

        {query && searchList.length && showSuggestions ? (
          <div className="suggestions__wrapper">
            {searchList.map((items, index) => {
              return (
                <SearchSuggestions
                  key={index}
                  items={items}
                />
              )
            })}
          </div>
        ) : null }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchList: state.searchList.items
});

const mapDispatchToProps = {
  fetchSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
