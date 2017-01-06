import $ from 'jquery'

export default function deleteSong(song_id){
  return function(dispatch){
    $.ajax({
      url: `https://shallow-endr-rails.herokuapp.com/future_songs/${song_id}`,
      type: 'POST',
      headers: { authorization: localStorage.jwt }
    }).done(function(response){
      
      return dispatch({type: '', dispatch: response.message})
    })
  }
}
