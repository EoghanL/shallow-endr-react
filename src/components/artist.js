import React from 'react'
import SongList from './song_list'

export const Artist = (props) => {
  //artist has props that include all albums and songs
  return (
    <div className='list'>
      <ul><SongList artistId={props.key} rankings={props.rankings}/></ul>
    </div>
  )
}
