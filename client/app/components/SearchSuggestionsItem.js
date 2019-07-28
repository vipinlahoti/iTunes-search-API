import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFavorites } from '../redux/actions';

class SearchSuggestionsItem extends Component {
  state = {
    fav: false
  }

  handleFav = () => {
    this.props.setFavorites(this.props.items);
  }
  
  render() {
    const favClassName = this.state.fav ? 'favbutton' : 'unfavbutton'
    const favList = [];
    return (
      <div className="genre-list">
        <div className="row middle-xs">
          <div className="margin-right-sm">
            <img src={this.props.items.artwork} alt={this.props.items.name} />
          </div>

          <div className="suggestions__inner_tracks">
            <h3><strong>Name:</strong> <a href={this.props.items.url} target="_blank">{this.props.items.name}</a></h3>
            <h5><strong>Genre:</strong> {this.props.items.genre}</h5>
            <h5><strong>ID:</strong> {this.props.items.id}</h5>
          </div>

          <div>
            <button onClick={() => this.handleFav(this.props.items)} className={favClassName}>Fav</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchList: state.searchList.favItems
});

const mapDispatchToProps = {
  setFavorites
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSuggestionsItem);
