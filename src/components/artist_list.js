import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getArtist from '../actions/getArtist'
import createArtist from '../actions/createArtist'

import { Artist } from './artist'

class ArtistList extends Component{
  constructor(props) {
    super(props)
    this.getExistingArtist = this.getExistingArtist.bind(this)
    this.createNewArtist = this.createNewArtist.bind(this)
  }

  getExistingArtist(event){
    event.preventDefault()
    this.props.getArtist(event.target.attributes.id.value)
  }

  createNewArtist(event){
    event.preventDefault()
    let mb_id = event.target.attributes.id.value
    let display_name = event.target.attributes.name.value
    let name = display_name.toLowerCase().replace(' ', '')
    this.props.createArtist({ name: name, display_name: display_name, mb_id: mb_id })
  }

  render() {
    let artistArray = []
    let newArtists = []
    let existingArtists = []
    let that = this
    let newArtistsText= ""
    let existingArtistsText = ""
    let artistNameText = ""
    if(this.props.artist !== null && this.props.artist !== undefined){
      artistNameText = this.props.artist.display_name
      artistArray = <Artist id={this.props.artist.id} name={this.props.artist.display_name} songs={this.props.songs} rankings={this.props.rankings} />
    }

    if (Array.isArray(this.props.newArtists) && this.props.newArtists.length > 0) {
      artistNameText = ""
      newArtistsText = "Do you want to add a new artist? Click name to add."
      newArtists = this.props.newArtists.map(function(artist){
        let dateInfo = ''
        let year = artist.date_begin.split('-')[0]
        let allmusicLink = ''
        if (artist.urls.allmusic) { allmusicLink = <a target="_blank" href={artist.urls.allmusic}>Allmusic Page</a> }

        if (year !== 2030) {
          if (artist.type === "Person") {
            dateInfo = `(Born: ${year})`
          } else {
            dateInfo = `(Formed: ${year})`
          }
        }
        return (
          <li className="list" key={artist.id}>
            <span
              className='new-artist-line'
              name={artist.name}
              id={artist.id}
              onClick={that.createNewArtist}>
              {artist.name} {dateInfo}
            </span>
          &nbsp;{allmusicLink}
        </li>
      )
      })
    }

    if (Array.isArray(this.props.existingArtists) && this.props.existingArtists.length > 0) {
      artistNameText = ""
      existingArtistsText= "Did you mean? Click to select."
      existingArtists = this.props.existingArtists.map(function(artist){
        return <li className="list" key={artist.id} name={artist.name} id={artist.id} onClick={that.getExistingArtist}>{artist.display_name}</li>
      })
    }
    return (
      <div className="artist-list">
        <h3>{artistNameText}</h3>
        {artistArray}
        <p>{existingArtistsText}</p>
        <ul>
        {existingArtists}
        </ul>
        <p>{newArtistsText}</p>
        <ul>
          {newArtists}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { artist: state.artist, newArtists: state.newArtists, existingArtists: state.existingArtists, songs: state.songs, rankings: state.rankings, message: state.message }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getArtist: getArtist, createArtist: createArtist}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList)
