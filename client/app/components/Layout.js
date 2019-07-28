import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Header from './Header';
import SearchBox from './SearchBox';
import Favorites from './Favorites';
import { setFavorites } from '../redux/actions';

class Layout extends Component {
  state = {
    favItems: this.props.favItems
  }

  handleRemoveFav = () => {
    this.setState({
      favItems: []
    });
    localStorage.clear();
  }

  componentDidUpdate() {
    const stateFavItems = this.props.favItems;
    const storedFavItem = JSON.parse(localStorage.getItem('favItem'));
    const setFaItems = _.unionWith(stateFavItems, storedFavItem, _.isEqual);

    localStorage.setItem('favItem', JSON.stringify(setFaItems));
  }

  render() {
    const { favItems } = this.props;
    const favItem = JSON.parse(localStorage.getItem('favItem'));

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Header />
            <SearchBox />

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

const mapStateToProps = state => ({
  favItems: state.searchList.favItems
});

const mapDispatchToProps = {
  setFavorites
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
