import $ from 'jquery'

export default function deleteSong(song_id){
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/future_songs/${song_id}`,
      type: 'POST',
      headers: { authorization: localStorage.jwt }
    }).done(function(response){
      
      return dispatch({type: '', dispatch: response.message})
    })
  }
}