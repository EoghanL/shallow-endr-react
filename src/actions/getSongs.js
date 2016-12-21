import $ from 'jquery';

export default function getSongs(artist){
  return function(dispatch){
    $.ajax({
      url: "https://shallow-endr-rails.herokuapp.com/artists",
      type: "POST",
      data: { artist: artist },
      headers: { authorization: localStorage.jwt }
    }).done(function(response){
        dispatch({type: "GET_SONGS", payload: response})
      }
    )
  }
}
