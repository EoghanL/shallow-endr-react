import React, { Component } from 'react'
import { connect } from 'react-redux'
import Song from './song'

class SongList extends Component{
  constructor(props) {
    super(props)
  }

  // let ranked = ""
  // if (that.props.rankings) {
  //   if (that.props.rankings.song_id === song.id) { ranked = "checked" }
  // }

  render() {
    if (!this.props.songs) {
      return <div></div>
    }
    let that = this
    let song_list = this.props.songs.map((song) => {
      return <Song name={song.name} id={song.id} artistId={song.artist_id} mbId={song.mb_id} albumId={song.album_id} currentWeight={song.current_weight}/>
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
