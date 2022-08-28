import React from 'react';

const StoreButtons = (props) => {

  return (
    <div className="store-buttons">
      <button onClick={props.toggleSteamState} id="steam-button" className={props.steamState ? "btn btn-info" : "btn btn-outline-info"}>Steam</button>
      <button onClick={props.toggleGogState} id="gog-button" className={props.gogState ? "btn btn-info" : "btn btn-outline-info"}>GOG</button>
    </div>
  );
}

export default StoreButtons;