import React, { Component } from 'react';
import _ from 'lodash';
import Header from "./Header";
import SearchBox from "./SearchBox";
import Favorites from "./Favorites";

class Layout extends Component {
  state = {
    favItems: []
  }

  favToggle = (item) => {
    this.setState({
      favItems: [...this.state.favItems, item]
    });
  }

  handleRemoveFav = () => {
    this.setState({
      favItems: []
    });
    localStorage.clear();
  }

  componentDidUpdate() {
    const stateFavItems = this.state.favItems;
    const storedFavItem = JSON.parse(localStorage.getItem('favItem'));
    const setFaItems = _.unionWith(stateFavItems, storedFavItem, _.isEqual);

    localStorage.setItem('favItem', JSON.stringify(setFaItems));
  }

  render() {
    const favItem = JSON.parse(localStorage.getItem('favItem'));

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Header />
            <SearchBox favToggle={this.favToggle} />

            {favItem !== null ? (
              <div className="favourates__wrapper">
                <div className="row between-xs middle-xs">
                  <h2>My Favorites</h2>
                  <button onClick={this.handleRemoveFav} className="remove-fav">Remove Favorites</button>
                </div>
              </div>
              ) : null }
            {favItem !== null && favItem.map((item, index) => {
              return (
                <Favorites
                  key={index}
                  favItems={item}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Layout;
