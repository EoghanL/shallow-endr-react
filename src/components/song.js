import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import addSong from '../actions/addSongToPlaylist'
import castVote from '../actions/castVote'
import removeVote from '../actions/removeVote'

class Song extends Component{
  constructor(props){
    super(props)
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this)
  }

  songClick(event){
    event.preventDefault();
    this.props.addSong({ song_id: event.target.id, user_id: this.props.current_user})
  }

  handleCheckBoxChange(event){
    event.preventDefault()
    let current_user = this.props.current_user
    let vote_weight = 1

    let vote_info = { song_id: this.props.id, user_id: current_user, artist_id: this.props.artistId, weight: vote_weight }

    if (this.props.rankings != null) {
      if (this.props.rankings.song_id === this.props.id) {
        vote_info.ranking_id = this.props.rankings.id
        this.props.removeVote(vote_info)
        return
      }
    }
    this.props.castVote(vote_info)
  }

  render(){
    let checked = ''
    if (this.props.rankings != null) {
      if (this.props.id == this.props.rankings.song_id) { checked = 'checked' }
    }
    return (
      <div className="songs-with-checkboxes">
        <li>
        <input name='thing' type='checkbox' checked={checked} onChange={this.handleCheckBoxChange} />
        <label HTMLfor='thing' onClick={this.handleCheckBoxChange}/>
        <div id={this.props.id} mbId={this.props.mbId} albumId={this.props.albumId}>{this.props.name} ({this.props.currentWeight})</div>
      </li>
      <br />
      </div>
    )
  }
}
function mapStateToProps(state){
  return { current_user: state.user_id, rankings: state.rankings }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ addSong: addSong, castVote: castVote, removeVote: removeVote }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Song)
