import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gpl from 'graphql-tag';

import fetchSongById from '../queries/fetchSongById';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('lyrics is submitted');
    console.log('this.props.songId: ', this.props.songId);
    console.log('this.state.userInput: ', this.state.userInput);
    this.props
      .mutate({
        variables: {
          content: this.state.userInput,
          songId: this.props.songId,
        },
      })
      .then(() => {
        this.setState({ userInput: '' });
      });
  }

  render() {
    console.log('this.props: a', this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit} action="">
          <label>Create Lyric:</label>
          <input
            type="text"
            value={this.state.userInput}
            onChange={e => {
              this.setState({ userInput: e.target.value });
            }}
          />
        </form>
      </div>
    );
  }
}

const mutation = gpl`
mutation AddLyricsToSong($content: String, $songId: ID) {
  addLyricToSong(content: $content, songId: $songId) {
    id
    lyrics {
      content
    }
  }
}
`;

// export default compose(graphql(fetchSongById), graphql(mutation))(LyricCreate);
export default graphql(mutation)(LyricCreate);
// export default LyricCreate;
