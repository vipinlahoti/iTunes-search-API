import React, { Component } from 'react';
import './SearchBox.css';

class SearchSuggestionsTitle extends Component {
  state = {
    fav: false
  }

  handleFav = () => {
    console.log('fav clicked');
    this.setState({
      fav: !this.state.fav

    });
  }
  
  render(){
    const favClassName = this.state.fav ? 'favbutton' : 'unfavbutton'
    return (
      <div>
        <div className="row">
          <div className="suggestions__inner_kind">{this.props.itemKey}</div>
        </div>

        {this.props.itemValue.map((items, index) => {
          return (
            <div className="genre-list" key={index}>
              <div className="row middle-xs">
                <div className="margin-right-sm">
                  <img src={items.artwork} alt={items.name} />
                </div>

                <div className="suggestions__inner_tracks">
                  <h3><strong>Name:</strong> <a href={items.url} target="_blank">{items.name}</a></h3>
                  <h5><strong>Genre:</strong> {items.genre}</h5>
                  <h5><strong>ID:</strong> {items.id}</h5>
                </div>

                <div>
                  <button onClick={this.handleFav} className={favClassName}>Fav</button>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    );
  }
}

export default SearchSuggestionsTitle;
