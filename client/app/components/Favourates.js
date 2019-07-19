import React from 'react';

const Favourates = ({favItems}) => {
  return (
    <div className="favourates__wrapper">
      <div className="genre-list">
        <div className="row middle-xs">
          <div className="margin-right-sm">
            <img src={favItems.artwork} alt={favItems.name} />
          </div>

          <div className="suggestions__inner_tracks">
            <h3><strong>Name:</strong> <a href={favItems.url} target="_blank">{favItems.name}</a></h3>
            <h5><strong>Genre:</strong> {favItems.genre}</h5>
            <h5><strong>ID:</strong> {favItems.id}</h5>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Favourates;
