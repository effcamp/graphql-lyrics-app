import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export class SongList extends Component {
  renderSongs = () => {
    return this.props.data.songs.map((song) => (
      <li key={song.id} className="collection-item">
        {song.title}
      </li>
    ));
  };

  render() {
    return (
      <div>
        SongList
        <ul className="collection">
          {this.props.data.loading ? 'loading...' : this.renderSongs()}
        </ul>
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
