import $ from 'jquery'

export default function createArtist(artist){
  return function(dispatch){
    $.ajax({
      url: "https://shallow-endr-rails.herokuapp.com/artists",
      type: 'POST',
      data: {artist: { mb_id: artist.mb_id, name: artist.name, display_name: artist.display_name } },
      headers: { authorization: localStorage.jwt }
    }).done(function(response){
      return dispatch({type: "GET_SONGS", payload: response})
    })
  }
}
