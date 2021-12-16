import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon: {id, name, hp, sprites: {front, back}}}) {
  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={front}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
