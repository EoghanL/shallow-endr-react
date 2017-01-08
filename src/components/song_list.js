import React, { Component } from 'react'
import { connect } from 'react-redux'
import Song from './song'

class SongList extends Component{
  render() {
    if (!this.props.songs) {
      return <div></div>
    }
    let song_list = this.props.songs.map((song) => {
      return <Song name={song.name} key={song.id} id={song.id} artistId={song.artist_id} mbId={song.mb_id} albumId={song.album_id} currentWeight={song.current_weight}/>
    })
    return (
      <div className="song-list">
        {song_list}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { songs: state.songs }
}

export default connect(mapStateToProps)(SongList)
